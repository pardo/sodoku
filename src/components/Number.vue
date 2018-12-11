<template>
  <div>
    <number-pick @selected="selected" v-show="pickNumberViewVisible" :disabled="disabled" />
    <table v-show="!pickNumberViewVisible" class="number" :class="{editable: editable, transparent: number !==null}">
      <tr>
        <td @click="changeAlternative(0)" class="b">{{alternatives[0]}}</td>
        <td @click="changeAlternative(1)" class="b wider">{{alternatives[1]}}</td>
        <td @click="changeAlternative(2)" class="b">{{alternatives[2]}}</td>
      </tr>
      <tr>
        <td @click="changeAlternative(3)" class="b taller">{{alternatives[3]}}</td>
        <td @click="changeCenter" class="c taller" :class="{error: error}">{{number}}</td>
        <td @click="changeAlternative(4)" class="b taller">{{alternatives[4]}}</td>
      </tr>
      <tr>
        <td @click="changeAlternative(5)" class="b">{{alternatives[5]}}</td>
        <td @click="changeAlternative(6)" class="b wider">{{alternatives[6]}}</td>
        <td @click="changeAlternative(7)" class="b">{{alternatives[7]}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import NumberPick from '@/components/NumberPick.vue'

export default {
  props: {
    index: Number
  },
  components: {
    NumberPick
  },
  data () {
    return {
      pickNumberViewVisibleAtIndex: false,
      lastChange: 'center'
    }
  },
  computed: {
    error () {
      return this.$root.hasError(this.index)
    },
    editable () {
      return this.$root.boardState[this.index].editable
    },
    number () {
      return this.$root.board[this.index]
    },
    alternatives () {
      return this.$root.alternatives[this.index]
    },
    alternativeValues () {
      var values = this.alternatives.filter(value => {
        return value
      })
      values.sort()
      return values
    },
    disabled () {
      if (this.lastChange === 'center') {
        return []
      }
      return this.alternatives
    },
    pickNumberViewVisible () {
      return this.$root.pickNumberViewVisibleAtIndex === this.index
    }
  },
  methods: {
    selected (number) {
      if (this.lastChange === 'center') {
        Vue.set(this.$root.board, this.index, number)
      } else {
        this.setAlternative(this.lastChange, number)
      }
      this.$root.pickNumberViewVisibleAtIndex = null
    },
    changeAlternative (i) {
      if (!this.editable || this.number) { return }
      var number = this.alternatives[i]
      // start with the first one
      if (number !== null) {
        this.setAlternative(i, null)
      } else {
        this.lastChange = i
        this.$root.pickNumberViewVisibleAtIndex = this.index
      }
    },
    changeCenter () {
      if (!this.editable) { return }
      if (this.number !== null) {
        Vue.set(this.$root.board, this.index, null)
      } else {
        this.lastChange = 'center'
        this.$root.pickNumberViewVisibleAtIndex = this.index
      }
    },
    setAlternative (i, value) {
      var alternatives = [...this.alternatives]
      alternatives[i] = value
      Vue.set(this.$root.alternatives, this.index, alternatives)
    }
  }
}
</script>

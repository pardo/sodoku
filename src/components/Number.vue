<template>
  <div>

    <number-pick @selected="selected" v-show="pickNumberViewVisible" :disabled="disabled" />

    <div v-show="!pickNumberViewVisible" class="number" :class="{editable: editable}">
      <div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(0)" class="b">{{alternatives[0]}}</div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(1)" class="b wider">{{alternatives[1]}}</div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(2)" class="b">{{alternatives[2]}}</div>
      </div>
      <div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(3)" class="b taller">{{alternatives[3]}}</div>
        <div @click="changeCenter" class="c taller" :class="{error: error}">{{number}}</div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(4)" class="b taller">{{alternatives[4]}}</div>
      </div>
      <div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(5)" class="b">{{alternatives[5]}}</div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(6)" class="b wider">{{alternatives[6]}}</div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(7)" class="b">{{alternatives[7]}}</div>
      </div>
    </div>
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
      lastChange: null,
      alternatives: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
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
        Vue.set(this.alternatives, this.lastChange, number)
      }
      this.$root.pickNumberViewVisibleAtIndex = null
    },
    changeAlternative (i) {
      if (!this.editable || this.number) { return }
      var number = this.alternatives[i]
      // start with the first one
      if (number !== null) {
        number = null
        Vue.set(this.alternatives, i, number)
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
    }
  }
}
</script>

<style scoped lang="scss">
.number {
  background: #f0f0f0;
  border: 0.05rem solid rgb(184, 196, 184);
  display: inline-block;
  text-align: center;
}
.editable {
  background: #ffffff;
}
.b {
  width: 1rem;
  height: 1rem;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  line-height: 1rem;
  font-size: 0.6rem;
  color: #aaa;
}
.c {
  width: 1.2rem;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 1.2rem;
}

.editable {
  .b, .c {
    cursor: pointer;
  }
}

.editable {
  .b:hover:not(.transparent),
  .c:hover {
    transition: background 0.3s;
    background: #f5f5f5;
    border-radius: 0.2rem;
  }
}
.taller {
  height: 1.2rem;
  line-height: 1.2rem;
}
.wider {
  width: 1.2rem;
}
.error {
  color: #f44336;
}
.transparent {
  color: transparent;
}
</style>

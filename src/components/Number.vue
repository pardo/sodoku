<template>
  <div>
    <div class="number" :class="{editable: editable}">
      <div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(0)" class="b">{{alternatives[0]}}</div><div :class="{transparent: number !==null}" @click="changeAlternative(1)" class="b wider">{{alternatives[1]}}</div><div :class="{transparent: number !==null}" @click="changeAlternative(2)" class="b">{{alternatives[2]}}</div>
      </div>
      <div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(3)" class="b taller">{{alternatives[3]}}</div><div @click="changeCenter" class="c taller" :class="{error: error}">{{number}}</div><div :class="{transparent: number !==null}" @click="changeAlternative(4)" class="b taller">{{alternatives[4]}}</div>
      </div>
      <div>
        <div :class="{transparent: number !==null}" @click="changeAlternative(5)" class="b">{{alternatives[5]}}</div><div :class="{transparent: number !==null}" @click="changeAlternative(6)" class="b wider">{{alternatives[6]}}</div><div :class="{transparent: number !==null}" @click="changeAlternative(7)" class="b">{{alternatives[7]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    index: Number
  },
  data () {
    return {
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
    }
  },
  methods: {
    clearAlternative (i) {
      Vue.set(this.alternatives, i, null)
    },
    changeAlternative (i) {
      if (!this.editable) { return }
      var number = this.alternatives[i]
      // start with the first one
      if (number === null) { number = 1 }
      while (this.alternativeValues.includes(number)) {
        number += 1
      }
      if (number > 9) { number = null }
      Vue.set(this.alternatives, i, number)
    },
    changeCenter () {
      if (!this.editable) { return }
      var number = this.$root.board[this.index]
      if (number === null) {
        number = 1
      } else {
        number += 1
        if (number > 9) { number = null }
      }
      Vue.set(this.$root.board, this.index, number)
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
  cursor: pointer;
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
  cursor: pointer;
  width: 1.2rem;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 1.2rem;
}
.editable {
  .b:hover,
  .c:hover {
    background: #fafafa;
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

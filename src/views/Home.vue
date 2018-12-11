<template>
  <div class="home">
    <div>
      <span class="button" @click="newGame"> New Game </span>
      <span class="button" @click="generate"> Generate </span>
      <span class="button" @click="reset"> Reset </span>
    </div>
    <div style="display: inline-block; vertical-align: middle ">
      <board v-if="!$root.loading" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'

export default {
  components: {
    Board
  },
  methods: {
    newGame () {
      if (!this.$root.loading) {
        this.$root.loadFromInternet()
      }
    },
    generate () {
      if (!this.$root.loading) {
        this.$root.loadFromGenerator()
      }
    },
    reset () {
      this.$root.resetBoard()
    }
  }
}
</script>

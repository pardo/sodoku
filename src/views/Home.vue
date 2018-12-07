<template>
  <div class="home">
    <div>
      <div class="button" @click="newGame">New Game</div>
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
    }
  }
}
</script>

<style>
  .button {
    cursor: pointer;
  }
  .button:hover {
    color: #aaa;
    text-shadow: 0px 0px 5px #2c3e50;
  }
</style>

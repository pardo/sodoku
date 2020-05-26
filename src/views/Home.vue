<template>
  <div class="home">
    <div>
      <span class="button" v-show="!$root.isConnected" @click="connect"> Connect </span>
      <span class="button" v-show="$root.isConnected" @click="$root.disconnect"> Disconnect ({{matchName}}) </span>
      <span class="button" @click="newGame"> New Game </span>
      <span class="button" @click="generate"> Generate </span>
      <span class="button" @click="reset"> Reset </span>
    </div>
    <div v-show="$root.isVictory">VICTORY</div>
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
  data () {
    return {
      matchName: ''
    }
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
      this.$root.resetAlternative()
    },
    connect () {
      this.matchName = window.prompt('Match name?') || ''
      this.matchName = this.matchName.replace(/[^a-z0-9]/g, '')
      if (this.matchName) {
        this.$root.connectMath(this.matchName)
      }
    }
  }
}
</script>

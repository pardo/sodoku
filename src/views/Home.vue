<template>
  <div class="home">
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
  }
}
</script>

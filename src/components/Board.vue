<template>
  <div class="board">
    <div><block :indexes="$root.block0" /><block :indexes="$root.block1" /><block :indexes="$root.block2" /></div>
    <div><block :indexes="$root.block3" /><block :indexes="$root.block4" /><block :indexes="$root.block5" /></div>
    <div><block :indexes="$root.block6" /><block :indexes="$root.block7" /><block :indexes="$root.block8" /></div>
  </div>
</template>

<script>
import Block from '@/components/Block.vue'

export default {
  components: {
    Block
  }
}
</script>

<style>
.board {
  display: flex;
}
</style>

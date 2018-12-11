<template>
  <table class="board">
    <tr><td><block :indexes="$root.block0" /></td><td><block :indexes="$root.block3" /></td><td><block :indexes="$root.block6" /></td></tr>
    <tr><td><block :indexes="$root.block1" /></td><td><block :indexes="$root.block4" /></td><td><block :indexes="$root.block7" /></td></tr>
    <tr><td><block :indexes="$root.block2" /></td><td><block :indexes="$root.block5" /></td><td><block :indexes="$root.block8" /></td></tr>
  </table>
</template>

<script>
import Block from '@/components/Block.vue'

export default {
  components: {
    Block
  }
}
</script>

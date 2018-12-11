<template>
  <table class="block">
    <tr>
      <td><number :index="indexes[0]" /></td><td><number :index="indexes[3]" /></td><td><number :index="indexes[6]" /></td>
    </tr>
    <tr>
      <td><number :index="indexes[1]" /></td><td><number :index="indexes[4]" /></td><td><number :index="indexes[7]" /></td>
    </tr>
    <tr>
      <td><number :index="indexes[2]" /></td><td><number :index="indexes[5]" /></td><td><number :index="indexes[8]" /></td>
    </tr>
  </table>
</template>

<script>
import Number from '@/components/Number.vue'

export default {
  props: {
    indexes: Array
  },
  components: {
    Number
  }
}
</script>

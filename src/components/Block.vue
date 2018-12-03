<template>
  <div class="block">
    <div>
      <number :index="indexes[0]" /><number :index="indexes[1]" /><number :index="indexes[2]" />
    </div>
    <div>
      <number :index="indexes[3]" /><number :index="indexes[4]" /><number :index="indexes[5]" />
    </div>
    <div>
      <number :index="indexes[6]" /><number :index="indexes[7]" /><number :index="indexes[8]" />
    </div>
  </div>
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

<style scoped>
.block {
  display: flex;
  border: 0.1rem solid #000;
}
</style>

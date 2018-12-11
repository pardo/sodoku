<template>
  <div>
    <table class="number picker">
      <tr>
        <td @click="select(1)" class="b" :class="{disabled: isDisabled(1)}">1</td>
        <td @click="select(2)" class="b wider" :class="{disabled: isDisabled(2)}">2</td>
        <td @click="select(3)" class="b" :class="{disabled: isDisabled(3)}">3</td>
      </tr>
      <tr>
        <td @click="select(4)" class="b taller" :class="{disabled: isDisabled(4)}">4</td>
        <td @click="select(5)" class="b wider taller" :class="{disabled: isDisabled(5)}">5</td>
        <td @click="select(6)" class="b taller" :class="{disabled: isDisabled(6)}">6</td>
      </tr>
      <tr>
        <td @click="select(7)" class="b" :class="{disabled: isDisabled(7)}">7</td>
        <td @click="select(8)" class="b wider" :class="{disabled: isDisabled(8)}">8</td>
        <td @click="select(9)" class="b" :class="{disabled: isDisabled(9)}">9</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    disabled: Array
  },
  methods: {
    select (number) {
      if (this.isDisabled(number)) { return }
      this.$emit('selected', number)
    },
    isDisabled (value) {
      return this.disabled.includes(value)
    }
  }
}
</script>

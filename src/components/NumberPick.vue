<template>
  <div>
    <table class="number">
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

<style scoped lang="scss">
.number {
  background: #ffffff;
  border: 0.05rem solid rgb(184, 196, 184);
  text-align: center;
}
.b {
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
  text-align: center;
  line-height: 1rem;
  font-size: 0.6rem;
  color: #aaa;
}
.b:hover:not(.disabled) {
  transition: 0.3s background;
  background: #f5f5f5;
  color: #000;
  border-radius: 0.2rem;
}
.taller {
  height: 1.2rem;
  line-height: 1.2rem;
}
.wider {
  width: 1.2rem;
}
.disabled {
  color: #f6f6f6;
}
</style>

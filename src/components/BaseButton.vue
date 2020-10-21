<template lang="html">
  <div class="">
    <button v-on="$listeners" :class="buttonClass" v-bind="$attrs">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
    },
  },
};
</script>

<style lang="css" scoped>
.purchase__button {
  position: fixed;
  bottom: 30px;
  right: 50px;
}
.button-active {
  background: #fa4a0c;
  color: white;
  padding: 10px 25px;
  border-radius: 30px;
}
button {
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
}
</style>

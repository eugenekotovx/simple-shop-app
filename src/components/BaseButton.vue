<template lang="html">
  <div class="">
    <button
      v-on="$listeners"
      :class="buttonClass"
      v-bind="$attrs">
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String
    }
  }
}
</script>

<style lang="css" scoped >
  .button-active {
    background: #0f4c75;
    background: #FA4A0C;
    color: white;
    padding: 10px 25px;
    border-radius: 30px;
  }
  .button__text {
    margin-top: 6px;
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

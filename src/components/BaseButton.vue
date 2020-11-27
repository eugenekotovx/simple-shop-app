<template lang="html">
    <button v-on="$listeners" :class="buttonClass" v-bind="$attrs">
      <slot />
    </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>

.button-active {
  background: #fa4a0c;
  color: white;
  padding: 10px 25px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  &:hover {
    opacity: .7;
    transition: .2s;
  }
}
.button__text {
  color: #ffffff;
}
button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: stretch;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
}

.form__button {
  margin-top: 20px;
}

</style>

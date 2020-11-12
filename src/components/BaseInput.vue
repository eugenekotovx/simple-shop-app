<template lang="html">
  <div class="base-input__wrapper">
    <label class="base-input__label" v-if="label">
      {{ label }}
    </label>
    <input
      class="base-input"
      :value="value"
      @input="updateValue"
      v-on="listeners"
      :v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      defaul: "",
    },
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
};
</script>

<style lang="scss">
.error-message {
  font-size: 12px;
  opacity: .5;
  color: #fa4a0c;
}
.base-input {
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px grey solid;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 5px;
    margin-top: 20px;
  }
  &__label {
    opacity: 0.5;
    font-size: 14px;
  }
}
</style>

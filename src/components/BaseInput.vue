<template lang="html">
  <div class="">
    <label v-if="label"> {{ label }} </label>
    <input :value="value" @input="updateValue" v-on="listeners" :v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      defaul: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue 
      }
    }
  }
}
</script>

<style lang="css" scoped >

</style>

<template lang="html">
  <div class="">
    <button
      v-on="$listeners"
      class="button"
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

</style>

<template lang="html">
  <div class="">
    <img
      class="not-found"
      :src="require('@/assets/img/not_found.svg')"
      alt=""
    />
    <h3>This {{ resource }} was not found :(</h3>
    <router-link class="link" to="/shop">Back to main page</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      default: "page",
    },
  },
};
</script>

<style lang="css" scoped>
.not-found {
  width: 100%;
}
</style>

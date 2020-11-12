<template lang="html">
  <div class="help">
    <img class="help-img" :src="require('@/assets/img/not_found.svg')" alt="" />
    <h3>This {{ resource }} was not found :(</h3>
    <router-link tag="div" to="/shop">
      <BaseButton buttonClass="button-active"> Back to shop page </BaseButton>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      default: "page"
    }
  }
};
</script>

<style lang="css" scoped>
.help {
  margin-top: 100px;
}
</style>

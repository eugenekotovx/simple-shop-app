<template>
  <div>
    <img
      class="help-img"
      :src="require('@/assets/img/network_issue.svg')"
      alt=""
    />
    <h1>Ohhhh</h1>
    <h3>It looks like network issues :(</h3>
    <router-link :to="{ name: 'Shop' }"> back to main page </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

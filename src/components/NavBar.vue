<template lang="html">
  <div id="nav">
    <router-link class="link" to="/shop">Shop</router-link>
    <router-link class="link" to="/cart">Cart</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped >
 #nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 }
</style>

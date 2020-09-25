<template lang="html">
  <h2>
    <Cart/>
    <router-link to="/order-create">
      <button name="button">Purchase</button></router-link> 
  </h2>
</template>

<script>
import Cart from '@/components/Cart'

export default {
  components: {
    Cart
  }
}
</script>

<style lang="css" scoped >

</style>

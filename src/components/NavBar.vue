<template lang="html">
  <div id="nav">
    <router-link class="link" to="/shop">Shop</router-link>
    <router-link class="link" to="/cart">Cart</router-link>
    <RegistrationModal/>
  </div>
</template>

<script>
import RegistrationModal from '@/views/RegistrationModal'
export default {
  components: {
    RegistrationModal
  }
}
</script>

<style lang="scss" scoped >
  #nav {
    padding: 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>

<template lang="html">
  <div class="">
    <Cart/>
    <form class="order__form" @submit.prevent="createOrder(order)">
      <input type="text" value="" v-model="order.name" placeholder="enter your name">
      <input type="text" value="" v-model="order.lastName" placeholder="enter your last name">
      <input type="text" value="" v-model="order.phoneNumber" placeholder="enter your phone number">
      <input type="text" value="" v-model="order.address" placeholder="enter your address">
      <button type="submit" name="button">Submit</button>
    </form>
  </div>
</template>

<script>
import Cart from '@/components/Cart'
export default {
  components: {
    Cart
  },
  data() {
    return {
      order: this.createFreshOrder()
    }
  },
  methods: {
    createOrder(order) {

      this.$store.dispatch('order/getOrder', order)
    },
    createFreshOrder() {
      const id = Math.floor(Math.random() * 1000000)

      return {
        id: id,
        name: this.name,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        address: this.address,
        cart: this.$store.state.cart.cart
      }
    }
  }
}
</script>

<style lang="css" scoped >
  .order__form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
  }
  input {
    margin-bottom: 10px;
    border: 1px solid black;
  }
</style>

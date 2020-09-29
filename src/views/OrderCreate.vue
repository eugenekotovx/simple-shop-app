<template lang="html">
  <div class="">
    <Cart/>
    <h2>Order details</h2>
    <form class="order-form" @submit.prevent="">
     <BaseInput
     label="Name:"
     v-model="order.name"
     />
     <BaseInput
     label="Last name:"
     v-model="order.lastName"
     />
     <BaseInput
     label="Phone Number:"
     v-model="order.phoneNumber"
     />
       <BaseInput
         type="text"
         v-model="order.location.address"
         label="Address"/>
        <select class="" v-model="order.location.country" name="Country" placeholder="Country">
          <option value="" disabled selected> Select your option</option>
          <option value="hurr">Value 1</option>
          <option value="hurr">Value 2</option>
          <option value="hurr">Value 3</option>
        </select>
        <BaseInput
        label="Coupon code"
        />
      <BaseButton type="submit" name="button">Submit</BaseButton>
    </form>
  </div>
</template>

<script>
import Cart from '@/components/Cart'
export default {
  components: {
    Cart,
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
        name: name,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        location: {
          address: this.address,
          country: this.country
        },
        cart: this.$store.state.cart.cart
      }
    }
  },
}
</script>

<style lang="scss" scoped >
  .select {
    background-color: white;
    margin-top: 3px;
  }
</style>

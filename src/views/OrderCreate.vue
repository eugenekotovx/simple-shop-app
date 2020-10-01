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
     <BaseInput
     label="Coupon code"
     />
     <vSelect
       :options="countries"
       label="name"
       :reduce="country => country.name"
       v-model="order.location.country"
     />
    <BaseButton type="submit" name="button">Submit</BaseButton>
  </form>
  </div>
</template>

<script>

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import { countries } from '@/components/data/countries.js'
import Cart from '@/components/Cart'
export default {
  components: {
    Cart,
    vSelect
  },
  data() {
    return {
      order: this.createFreshOrder(),
      countries: countries
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
          country: this.value
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

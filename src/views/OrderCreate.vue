<template lang="html">
  <div class="">
    <h2>Order details</h2>
    <div class="cart__list" v-for="product in this.$store.state.cart.cart" :key="product.id">
      <span> {{ product.name }} - {{'x' + product.count }} - {{product.totalItemPrice + '$'}}</span>
    </div>
    <form class="order-form" @submit.prevent="createOrder">
     <BaseInput
       label="Phone Number:"
       v-model="order.phoneNumber"
       :class="{ error: $v.order.phoneNumber.$error }"
       @blur="$v.order.phoneNumber.$touch()"
     />
     <BaseInput
       type="text"
       v-model="order.address"
       :class="{ error: $v.order.address.$error }"
       @blur="$v.order.address.$touch()"
       label="Address"/>
     <vSelect
       :options="countries"
       label="name"
       :reduce="country => country.name"
       v-model="order.country"
       :class="{ error: $v.order.country.$error }"
     >
     <template #search="{attributes, events}">
      <input
        class="vs__search"
        :required="!order.country"
        v-bind="attributes"
        v-on="events"
        @blur="$v.order.country.$touch()"

      />
      </template>
     </vSelect>
     <BaseInput
     label="Coupon code"
     />
    <BaseButton type="submit" name="button">Submit</BaseButton>
  </form>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import { countries } from '@/components/data/countries.js'
import { required } from 'vuelidate/lib/validators'
export default {
  components: {
    vSelect
  },
  data() {
    return {
      order: this.createFreshOrder(),
      countries: countries
    }
  },
  validations: {
    order: {
      phoneNumber: { required },
      country: { required },
      address: { required }
    }
  },
  methods: {
    createOrder() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('order/getOrder', this.order)
      }
    },
    createFreshOrder() {
      const id = Math.floor(Math.random() * 1000000)

      return {
        userId: this.$store.state.user.user.id,
        id: id,
        name: this.$store.state.user.user.name,
        phoneNumber: this.$store.state.user.phone,
        address: '',
        country: '',
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

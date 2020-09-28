<template>
  <div class="cart">
    <div class="cart__wrapper">
      <button @click="openBusket=!openBusket" type="button" name="button" class="cart__btn">My Cart</button>
      <div v-if="openBusket">
        <div
        v-for="(cartItem, index) in cart.cart"
        :key="index"
        >
        <h3 v-if="cartItem.count != 0" class="cart__price">
          {{ cartItem.count }} - {{ cartItem.name }} - {{ cartItem.price + '$' }}
          <button
          type="button" name="button"
          @click="decrementCount(cartItem)"
          >-</button>
          <button type="button"
          name="button"
          @click="incrementCount(cartItem)"
          >+</button>
        </h3>
        </div>
      </div>
    </div>

    <h1>
      {{ cartTotalPrice }}
    </h1>
  </div>

</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data() {
    return {
      openBusket: true
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotalPrice'])
  },
  methods: {
    ...mapActions(['incrementCount','decrementCount'])
  }
}
</script>

<style lang="scss" scoped >
  .cart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &__price {
      display: flex;
      align-items: center;

    }
  }

</style>

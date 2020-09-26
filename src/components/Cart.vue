<template>
  <div class="cart">
    <div class="cart__wrapper">
      <button @click="openBusket=!openBusket" type="button" name="button" class="cart__btn">My Cart</button>
      <div v-if="openBusket">
        <h2
        v-for="(cartItem, index) in cart.cart"
        :key="index"
        >
        <h2 v-if="cartItem.count != 0" class="cart__price">
          {{ cartItem.count }} - {{ cartItem.name }} - {{ cartItem.price + '$' }}
          <button
          type="button" name="button"
          @click="decrementCount(cartItem)"
          class="cart__btn">-</button>
          <button type="button"
          name="button"
          @click="incrementCount(cartItem)"
          class="cart__btn">+</button>
        </h2>
        </h2>
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
  .cart__btn{
    background: none;
    border:  2px solid #bbe1fa;
    padding: 10px 15px;
    color: #bbe1fa;
    opacity: 0.7;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      left: 0;
      right: 100%;
      bottom: 0;
      z-index: -1;
      top: 0;
    }
  &:hover {
    color: #0f4c75;
    opacity: 1;
    transition: .4s;
    cursor: pointer;
  }
  &:hover:before {
    background-color: #bbe1fa;
    right: 0%;
    transition: .3s;
  }
}
</style>

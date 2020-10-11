<template lang="html">
  <div class="controls__group">
      <BaseButton
        buttonClass="button-active"
        v-if="!itemInCart.count"
        @click.once="addProduct(product)">
      <BaseIcon
        :width="37"
        :height="37"
        :name="'cart'"
      />
      <span class="button__text">
        Add product in cart
      </span>
     </BaseButton>
   <div class="controls"
    v-if="itemInCart.count >= 1">
     <BaseButton
       type="button"
       buttonClass="button-active"
       @click="decrementCount(product)"
     >-</BaseButton>
     <BaseButton
       type="button"
       buttonClass="button-active"
       @click="incrementCount(product)"
     >+</BaseButton>
   </div>
    <span
      v-if="itemInCart.count >= 1"
      class="cart__counter"
    >
      in cart: <span>{{itemInCart.count}} </span>
    </span>
    <span
      v-if="itemInCart.total == 0"
      class="cart__counter sold-out"
    > SOLD OUT </span>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    itemInCart() {
      var item = this.$store.state.cart.cart.find(item => item.id == this.product.id)
      if (item) {
       return item
      } else {
       return this.product
      }
    }
  },
  methods: {
    ...mapActions(['addProduct', 'incrementCount','decrementCount']),
  }
}
</script>

<style lang="scss" scoped >
.cart__counter {
  max-width: 150px;
  width: 100%;
  text-align: center;
}
.controls {
  display: flex;
  &__group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
.sold-out {
  color: red;
}
</style>

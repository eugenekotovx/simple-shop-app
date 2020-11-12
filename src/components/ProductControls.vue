<template lang="html">
  <div class="">
    <div class="controls__group">
      <BaseButton
        buttonClass="button-active product__button"
        v-if="!itemInCart.count && product.total != 0"
        @click.once="addProduct(product)"
      >
        <span class="button__text">
          Add to cart
        </span>
      </BaseButton>
      <span v-if="itemInCart.total == 0" class="cart__counter sold-out">
        SOLD OUT
      </span>
      <div class="controls" v-if="itemInCart.count >= 1">
        <BaseButton type="button" @click="decrementCount(product)"
          ><span class="button__text"> - </span></BaseButton
        >
        <span v-if="itemInCart.count >= 1" class="cart__counter">
          {{ itemInCart.count }}
        </span>
        <BaseButton type="button" @click="incrementCount(product)">
          <span class="button__text"> + </span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    itemInCart() {
      var item = this.$store.state.cart.cart.find(
        item => item.id == this.product.id
      );
      if (item) {
        return item;
      } else {
        return this.product;
      }
    }
  },
  methods: {
    ...mapActions('cart', ["addProduct", "incrementCount", "decrementCount"])
  }
};
</script>

<style lang="scss" scoped>
.cart__counter {
  max-width: 150px;
  text-align: center;
}
.controls {
  display: flex;
  background-color: #fa4a0c;
  color: white;
  padding: 4px;
  border-radius: 5px;
  font-size: 20px;
  &:hover {
    opacity: .7;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 5px;
    transition: .4s;
  }
  &__group {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.sold-out {
  color: red;
  margin-right: 20px;
}
@media screen and (max-width: 576px) {
  .controls__group {
    margin-top: 20px;
    flex-direction: column;
  }
  .sold-out {
    margin-right: 0;
    margin-bottom: 5px;
  }
}
</style>

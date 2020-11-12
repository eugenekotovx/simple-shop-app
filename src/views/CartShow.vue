<template lang="html">
  <div class="">
    <div class="help" v-if="cart.cart.length === 0">
      <img
        class="help-img"
        :src="require('@/assets/img/empty_cart.svg')"
        alt=""
      />
      <h2>Cart is empty</h2>
      <router-link tag="div" to="/shop">
        <BaseButton buttonClass="button-active"> Back to shop page </baseButton>
      </router-link>
    </div>
    <div class="" v-else>
      <div class="cart__price">
        Total -
        {{ cartTotalPrice }}
      </div>
      <div v-for="product in cart.cart" :key="product.id">
        <ProductCard :product="product" :category="product.category" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters('cart', ["cartTotalPrice"])
  }
};
</script>

<style lang="scss" scoped>
.help {
  margin-top: 100px;
}
.cart__price {
  color: #fa4a0c;
  font-size: 26px;
  text-align: right;
  margin-bottom: 20px;
}
</style>

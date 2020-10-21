<template lang="html">
  <div class="">
    <div v-if="cart.cart.length === 0">
      <h2>Cart is empty ((</h2>
      <img
        class="help-img"
        :src="require('@/assets/img/empty_cart.svg')"
        alt=""
      />
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
    ...mapGetters(["cartTotalPrice"])
  }
};
</script>

<style lang="scss" scoped>
.cart__price {
  color: #fa4a0c;
  font-size: 26px;
  text-align: right;
  margin-bottom: 20px;
}
</style>

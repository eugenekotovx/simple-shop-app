<template lang="html">
  <div class="">
    <div class="product">
      <div class="product__info">
        <img
          class="product__img"
          :src="
            require(`@/assets/img/` +
              shop.product.name.split(' ').join('_') +
              '.png')
          "
        />
        <h1 class="product__name">{{ shop.product.name }}</h1>
        <span class="product__price">{{ shop.product.price + "$" }}</span>
        <p class="product__description">
          {{ shop.product.description }}
        </p>
      </div>
    </div>
    <ProductControls :product="shop.product" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductControls from "@/components/ProductControls";
export default {
  components: {
    ProductControls,
  },
  methods: {
    ...mapActions(["addProduct"]),
  },
  computed: {
    ...mapState(["shop"]),
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  &__name {
    margin: 10px 0;
  }
  &__price {
    color: #fa4a0c;
  }
  &__info {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  &__description {
    text-align: left;
    opacity: 0.5;
  }
  &__img {
    max-width: 40%;
    margin: 0 auto;
  }
}
</style>

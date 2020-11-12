<template lang="html">
  <div class="product__card -shadow">
    <router-link
      class="route"
      tag="div"
      :to="{
        name: 'product-show',
        params: {
          id: product.id,
          product: product,
          category: product.category
        }
      }"
    >
      <div class="product__wrapper">
        <img
          class="product__img"
          :src="
            require(`@/assets/img/` +
              product.name.split(' ').join('_') +
              '.png')
          "
          alt=""
        />
        <div class="product__description">
          <span class="product__name"> {{ product.name }} - </span>
          <span class="product__price"> {{ product.price + "$" }}</span>
        </div>
      </div>
    </router-link>
    <ProductControls :product="product" />
  </div>
</template>

<script>
import ProductControls from "@/components/ProductControls";
export default {
  components: {
    ProductControls
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    category: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.product__img {
  width: 100px;
  height: 100px;
  margin-left: 15px;
  filter: drop-shadow(0px 0px 55px rgba(254, 32, 0, 0.3));
}
.product {
  &__card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
    border-radius: 30px;
    padding: 20px 15px;
    background-color: white;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    align-items: center;
    margin-bottom: 10px;
    &:hover {
      box-shadow: 5px 30px 60px rgba(57, 57, 57, 0.2);
      transition: .4s;
    }
  }
  &__description {
    margin-left: 20px;
    font-size: 20px;
  }
  &__price {
    color: red;
  }
  &__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
.route {
  flex-grow: 1;
  cursor: pointer;
}
@media screen and (max-width: 576px) {
  .product {
    &__card {
      flex-direction: column;
    }
  }
}
</style>

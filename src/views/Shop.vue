<template>
  <div class="">
    <h1>Browse by category</h1>
    <carousel
      :perPageCustom="[[576, 3]]"
      paginationActiveColor="#fa4a0c"
      paginationColor="#1a1a2e"
    >
      <slide
        v-for="category in shop.categories"
        :key="category"
        class="category__wrapper"
      >
        <router-link
          tag="div"
          class="category__card"
          :to="{ name: 'products-list', params: { category: category } }"
        >
          <BaseIcon
            class="category__img"
            :width="90"
            :height="90"
            :name="category"
          />
          <h2>
            {{ category }}
          </h2>
        </router-link>
      </slide>
    </carousel>
    <h1>Browse All</h1>
    <div class="products">
      <ProductCard
        v-for="product in shop.products"
        :key="product.id"
        :category="$route.params.category"
        :product="product"
      />
      <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
        <div slot="no-results">
          We cant find this products....
          <router-link class="link" to="/shop">Back to shop page</router-link>
        </div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import InfiniteLoading from "vue-infinite-loading";
import { mapState } from "vuex";
import ProductCard from "@/components/ProductCard";
export default {
  name: "Shop",
  components: {
    ProductCard,
    InfiniteLoading
  },
  data() {
    return {
      currentPage: 1
    };
  },
  mounted() {
    this.$store.dispatch("shop/getShopData");
  },
  methods: {
    infiniteHandler($state) {
      store
        .dispatch("shop/getProducts", {
          perPage: 4,
          page: this.currentPage
        })
        .then(products => {
          if (products.length) {
            this.currentPage += 1;
            $state.loaded();
          } else {
            $state.complete();
            console.log("complete");
          }
        });
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    store.dispatch("shop/setCategory").then(() => {
      next();
    });
  },
  computed: {
    ...mapState(["shop"])
  }
};
</script>

<style lang="scss">
.category {
  &__card {
    color: #1a1a2e;
    text-decoration: none;
    background: #ffffff;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 30px;
    bottom: 0;
    &:hover {
      transition: 0.3s ease;
      bottom: 10px;
    }
  }
  &__wrapper {
    padding: 15px 0;
  }
}
</style>

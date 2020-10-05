<template lang="html">
  <div class="">
    <h1> Category: {{ $route.params.category }}</h1>
    <div class="category" v-for="product in shop.category"  :key="product.id">
      <ProductCard :category="$route.params.category" :product="product"/>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import store from '@/store/index'
import InfiniteLoading from 'vue-infinite-loading';
import { mapState } from 'vuex'
import ProductCard from '@/components/ProductCard'

export default {
  components:{
    ProductCard,
    InfiniteLoading
  },
  data() {
    return {
      currentPage: 1,
      list: []
    }
  },
  methods: {
     infiniteHandler($state) {
       store
       .dispatch('shop/getProducts', {
         params: this.$route.params,
         perPage: 4,
         page: this.currentPage
       })
       .then((products) => {
         if (products.length) {
           this.currentPage += 1
           $state.loaded()
         } else {
           $state.complete()
         }
       })
     }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    store
    .dispatch('shop/setCategory')
    .then(() => {
      next()
    })
  },
  computed: {
    ...mapState(['shop'])
  },
}
</script>

<style lang="css" scoped >
</style>

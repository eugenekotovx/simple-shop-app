<template>
  <div>
    <Basket/>
    <div class="shop__wrapper">
    <div v-for="category in shop.shop"  :key="category.name" class="shop__category-title">
      <router-link :to="{ name: 'category-show', params: {category : category.category, products: category.products }}">
        <h1 >
            {{ category.category }}
        </h1>
       </router-link>

     </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import Basket from '@/components/Basket'


export default {
  name: 'Shop',
  components: {
    Basket
  },
  mounted() {
    this.$store.dispatch('shop/getCategorys')
  },
  computed: {
    ...mapState(['shop'])
  },
}
</script>
<style media="screen" lang="scss">

  .btn {
    height: 24px;
  }
  .shop {
      &__wrapper {
        max-width: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      &__category-title {
        color: blue;
        text-decoration: none;
        a {
          text-decoration: none;
          color: blue;
        }

      }
  }

</style>

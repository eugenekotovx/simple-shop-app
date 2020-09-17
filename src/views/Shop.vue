<template>
  <div>
    <Basket/>
    <div class="shop__wrapper">
    <div v-for="category in shop"  :key="category.name">
      <router-link :to="{ name: 'category-show', params: {category : category.category, products: category.products }}">
        <h1 class="shop__category-title">
            {{ category.category }}
        </h1>
       </router-link>

     </div>
    </div>
  </div>

</template>

<script>

import { mapState} from 'vuex'
import Basket from '@/components/Basket'

export default {
  name: 'Shop',
  components: {
    Basket
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
        color: black;
        text-decoration: none;
      }
  }

</style>

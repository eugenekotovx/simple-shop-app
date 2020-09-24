<template>
  <div>
    <Basket/>
    <div class="shop__wrapper">
    <div v-for="category in categories"  :key="category" class="shop__category-title">
      <router-link :to="{ name: 'category-show', params: {category : category }}">
        <h1 >
            {{ category }}
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
    this.$store.dispatch('shop/getCategories')
  },
  computed: {
    ...mapState(['shop']),
    categories() {
      return [...new Set(this.shop.shop.map(item => item.category))]
    }
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

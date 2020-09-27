<template>
  <div>
    <Cart/>
    <div class="shop__wrapper">
    <div v-for="category in categories"  :key="category" class="shop__category-title">
      <router-link :to="{ name: 'category-show', params: {category : category }}">
        <BaseIcon :name="category" />
        <h2 >
            {{ category }}
        </h2>

       </router-link>
     </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import Cart from '@/components/Cart'


export default {
  name: 'Shop',
  components: {
    Cart
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      &__category-title {
        color: #1a1a2e;
        text-decoration: none;
        display: flex;
        a {
          text-decoration: none;
          color: #1a1a2e;
        }

      }
  }

</style>

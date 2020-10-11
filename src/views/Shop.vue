<template>
  <div>
    <div class="category__wrapper">
    <div v-for="category in shop.shop"  :key="category" class="category__name">
      <router-link :to="{ name: 'products-list', params: {category : category }}">
        <BaseIcon :width="200" :height="200" :name="category" />
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

export default {
  name: 'Shop',
  mounted() {
    this.$store.dispatch('shop/getCategories')
  },
  computed: {
    ...mapState(['shop'])
  },
}
</script>
<style media="screen" lang="scss">
  .category {
    &__wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__name {
      color: #1a1a2e;
      text-decoration: none;
      display: flex;
      margin-right: 6px;
      a {
        text-decoration: none;
        color: #1a1a2e;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
    }
  }

</style>

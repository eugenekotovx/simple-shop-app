<template>
  <div>
    <div class="category__wrapper">
    <div v-for="category in shop.shop"  :key="category" class="category__card">
      <router-link :to="{ name: 'products-list', params: {category : category }}">
        <BaseIcon class="category__img" :width="200" :height="200" :name="category" />
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
    &__card {
      color: #1a1a2e;
      text-decoration: none;
      background: #ffffff;
      display: flex;
      margin-right: 6px;
      margin-bottom: 20px;
      border-radius: 30px;
      box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
      a {
        text-decoration: none;
        color: #1a1a2e;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
    }
    &__img {
      filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.07));
    }
  }

</style>

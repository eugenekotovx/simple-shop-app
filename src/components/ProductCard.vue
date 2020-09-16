<template lang="html">
  <div class="product-card -shadow">
    <router-link :to="{ name: 'product-show', params: { id : product.id, product: product }}">
      <h1> {{ product.id}} {{ product.name }}</h1>
      <h2> PRICE: {{ product.price + '$' }}</h2>
      <span v-if="product.count">
        in basket: <span>{{product.count}} </span>
        <template v-if="product.total == 0">
          <h2 class="sold-out"> SOLD OUT </h2>
        </template>
      </span>
      <button :key="product.id"
       @click="addProduct(product)" :disabled="product.total == 0" name="button" >
         push
     </button>
   </router-link>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['addProduct'])
  },
  computed: {

  }
}
</script>

<style lang="css" scoped >
  .sold-out {
    color: red;
  }
</style>

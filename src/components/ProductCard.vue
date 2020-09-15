<template lang="html">
  <div class="product-card -shadow">
      <h1> {{ product.id}} {{ product.name }}</h1>
      <h2> PRICE: {{ product.price + '$' }}</h2>
      <span v-if="product.count">
        in basket: <span>{{product.count}}</span>
      </span>
      <button :key="product.id"
       @click="addProduct(product)" name="button" >
         push
     </button>
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
  }
}
</script>

<style lang="css" scoped >

</style>

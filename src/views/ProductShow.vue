<template lang="html">

    <div class="">
      <h1> {{ product.name }}</h1>
      <h4>{{product.price}}</h4>
      <p>
        description in future
      </p>
    </div>
    <button :key="product.id"
     @click="addProduct(product)" :disabled="product.total == 0" name="button" >
       push
   </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
    product() {
      return $route.params.product
    }
  }
}
</script>

<style lang="css" scoped >

</style>

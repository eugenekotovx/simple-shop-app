<template lang="html">
  <button
   @click="addProduct(product)" :disabled="product.total == 0" name="button" >
     push
 </button>
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
  }
}
</script>

<style lang="css" scoped >

</style>

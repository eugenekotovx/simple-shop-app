<template lang="html">
  <button
   @click="addProduct(product)"
   :disabled="product.total == 0"
   name="button"
   class="buy__btn" >
     Add product in cart
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

<style lang="scss" scoped >
  .buy__btn {
    background: none;
    border:  2px solid blue;
    padding: 10px 15px;
    color: blue;
    opacity: 0.7;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      left: 0;
      right: 100%;
      bottom: 0;
      z-index: -1;
      top: 0;
    }
    &:hover {
      color: white;
      opacity: 1;
      transition: .4s;
      cursor: pointer;
    }
    &:hover:before {
      background-color: blue;
      right: 0%;
      transition: .3s;
    }
  }
</style>

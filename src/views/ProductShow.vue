<template lang="html">
<div class="">
    <div class="">
        <Basket/>
        <h1> {{ product.name }}</h1>
        <h2>{{product.price + '$'}}</h2>
        <p>
          description in future
        </p>
      </div>
      <BuyProductButton :product="product"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Basket from '@/components/Basket'
import BuyProductButton from '@/components/BuyProductButton'

export default {
  components: {
    Basket,
    BuyProductButton
  },
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  methods: {
    ...mapActions(['addProduct'])
  },
  computed: {

  }
}
</script>

<style lang="css" scoped >

</style>

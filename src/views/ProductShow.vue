<template lang="html">
<div class="">
    <div class="">
        <Basket/>
        <h1> {{ shop.product.name }}</h1>
        <h2>{{ shop.product.price + '$'}}</h2>
        <p>
          description in future
        </p>
      </div>
      <BuyProductButton :product="shop.product"/>
      {{ $attrs.category }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Basket from '@/components/Basket'
import BuyProductButton from '@/components/BuyProductButton'

export default {
  components: {
    Basket,
    BuyProductButton
  },
  methods: {
    ...mapActions(['addProduct'])
  },
  computed: {
    ...mapState(['shop'])
  },
}
</script>

<style lang="css" scoped >

</style>

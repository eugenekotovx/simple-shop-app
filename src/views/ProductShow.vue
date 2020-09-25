<template lang="html">
<div class="">
    <div class="">
        <Cart/>
        <h1> {{ shop.product.name }}</h1>
        <h2>{{ shop.product.price + '$'}}</h2>
        <p>
          description in future
        </p>
      </div>
      <BuyProductButton :product="shop.product"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Cart from '@/components/Cart'
import BuyProductButton from '@/components/BuyProductButton'

export default {
  components: {
    Cart,
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

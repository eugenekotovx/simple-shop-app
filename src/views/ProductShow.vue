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
  </div>
</template>

<script>
import store from 'vuex'
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
  beforeRouteUpdate (routeTo, from, next) {
    store
    .dispatch('shop/getProduct', routeTo.params.id)
    .then( product => {
      routeTo.params.product = product
      next()
    })
    .catch(error => {
      if (error.response && error.response.status == 404) {
        console.log(error.response)
      } else {
        next({ name: 'shop' })
      }
    })
  }
}
</script>

<style lang="css" scoped >

</style>

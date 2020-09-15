<template>
  <div class="basket">
    <div class="basket__wrapper">
      <button @click="openBusket= !openBusket" type="button" name="button">My Basket</button>
      <div v-if="openBusket">



        <h2 v-for="(basketItem, index) in this.$store.state.basket"
        :key="index"
        >
        <h2 v-if="basketItem.count != 0">
          {{ basketItem.count }} - {{ basketItem.name }} - {{ basketItem.price + '$' }}
          <button type="button" name="button" @click="decrementCount(basketItem)">-</button>
          <button type="button" name="button" @click="incrementCount(basketItem)">+</button>
        </h2>
        </h2>
      </div>
    </div>

    <h1>
      {{ basketTotalPrice }}
    </h1>
  </div>

</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Basket',
  data() {
    return {
      openBusket: true
    }
  },
  computed: {
    ...mapState(['basket', 'basketTotalPrice']),
    ...mapGetters(['basketTotalPrice'])
  },
  methods: {
    ...mapActions(['incrementCount','decrementCount'])
  }
}
</script>

<style lang="css" scoped >
  .basket {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>

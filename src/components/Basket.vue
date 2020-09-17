<template>
  <div class="basket">
    <div class="basket__wrapper">
      <button @click="openBusket=!openBusket" type="button" name="button" class="basket__btn">My Basket</button>
      <div v-if="openBusket">
        <h2
        v-for="(basketItem, index) in basket"
        :key="index"
        >
        <h2 v-if="basketItem.count != 0" class="basket__price">
          {{ basketItem.count }} - {{ basketItem.name }} - {{ basketItem.price + '$' }}
          <button
          type="button" name="button"
          @click="decrementCount(basketItem)"
          class="basket__btn">-</button>
          <button type="button"
          name="button"
          @click="incrementCount(basketItem)"
          class="basket__btn">+</button>
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
    ...mapState(['basket']),
    ...mapGetters(['basketTotalPrice'])
  },
  methods: {
    ...mapActions(['incrementCount','decrementCount'])
  }
}
</script>

<style lang="scss" scoped >
  .basket {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    &__price {
      display: flex;
      align-items: center;

    }
  }
  .basket__btn{
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

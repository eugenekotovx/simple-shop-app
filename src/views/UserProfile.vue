<template lang="html">
  <div class="user__wrapper">
    <div class="">
      <img class="user__avatar"
      :src="require(`@/assets/img/avatar.png`)" alt="">
    </div>
    <div class="user__info">
      <label for=""> Name: </label>
      <span>
        {{ user.user.name }}
      </span>
      <label for="">Phone: </label>
      <span>
        {{ user.user.phone }}
      </span>
      Orders history:
      <template v-for="order in user.user.orders">
        <span  :key="order.id"> {{order.cart}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['user', 'order'])
  },
  data() {
    return {
      id: this.$store.state.user.user.id
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    store
    .dispatch('user/getOrders', routeTo.params.id)
    .then(() => {
      next()
    })
  },
}
</script>

<style lang="scss" scoped >
  .user {
   &__avatar {
     width: 200px;
     height: 200px;
     border-radius: 50%;
     background-color: white;
     margin-right: 50px;
   }
   &__wrapper {
     display: flex;
     justify-content: flex-start;
   }
   &__info {
     display: flex;
     flex-direction: column;
   }
  }
</style>

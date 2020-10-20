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
    if (routeTo.params.id == store.state.user.user.id) {
      store
      .dispatch('user/getOrders', routeTo.params.id)
      .then(() => {
        next()
      })
    } else if (routeTo.params.id !== store.state.user.user.id){
      next({ name: 'network-issue' })
    }
  },
}
</script>

<style lang="scss" scoped >
  .user {
   &__avatar {
     width: 150px;
     height: 150px;
     border-radius: 50%;
     background-color: white;
     margin-right: 50px;
   }
   &__info {
     opacity: .5;
     display: block;
     padding-top: 7px;
     padding-bottom: 7px;
     border-bottom: 1px solid;
   }
   &__wrapper {
     display: flex;
     justify-content: space-around;
     background-color: white;
     border-radius: 20px;
     box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
   }
  }
</style>

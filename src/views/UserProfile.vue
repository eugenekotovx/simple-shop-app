<template lang="html">
  <div class="">
    <h1>My profile</h1>
    <h2 class="note__title">Personal details</h2>
    <div class="user__wrapper note">
      <div class="">
        <img
          class="user__avatar"
          :src="require(`@/assets/img/avatar.png`)"
          alt=""
        />
      </div>
      <div class="user">
        <span class="user__info">
          <label class="profile__label"> Name: </label>
          {{ user.user.name }}
        </span>
        <span class="user__info">
          <label class="profile__label"> Phone: </label>
          {{ user.user.phone }}
        </span>
      </div>
    </div>
    <h2 class="note__title">
      Orders history:
    </h2>
    <div class="note">
      <div class="help" v-if="user.user.orders.length == 0">
        <img
          class="help-img"
          :src="require('@/assets/img/orders__empty.svg')"
          alt=""
        />
        <h2>No orders yet</h2>
      </div>
      <template v-else v-for="order in user.user.orders">
        <HistoryOrder :key="order.id" :order="order" />
      </template>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";
import HistoryOrder from "@/components/HistoryOrder";
export default {
  components: {
    HistoryOrder
  },
  data() {
    return {
      id: store.state.user.user.id
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    if (routeTo.params.id == store.state.user.user.id) {
      store.dispatch("user/getOrders", routeTo.params.id).then(() => {
        next();
      });
    } else if (routeTo.params.id !== store.state.user.user.id) {
      next({
        name: "404"
      });
    }
  },
  computed: {
    ...mapState(["user", "order"])
  }
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  align-self: center;
  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background-color: white;
    margin-right: 50px;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  }
  &__info {
    opacity: 0.7;
    display: block;
    padding-top: 7px;
    padding-bottom: 7px;
    border-bottom: 1px solid;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    background-color: white;
  }
}

.profile__label {
  opacity: 0.5;
  font-size: 14px;
}
@media screen and (max-width: 576px) {
  .user {
    margin-top: 25px;
    &__avatar {
      margin-right: 0;
    }
    &__wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>

<template lang="html">
  <div class="">
    <h1>My profile</h1>
    <h2>Personal details</h2>
    <div class="user__wrapper">
      <div class="">
        <img
          class="user__avatar"
          :src="require(`@/assets/img/avatar.png`)"
          alt=""
        />
      </div>
      <div class="">
        <h3>
          {{ user.user.name }}
        </h3>
        <span class="user__info">
          {{ user.user.phone }}
        </span>
        <span class="user__info">
          testtesttest@gmail.com
        </span>
      </div>
    </div>
    <h2>
      Orders history:
    </h2>
    <template v-for="order in user.user.orders">
      <span :key="order.id"> {{ order }}</span>
    </template>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user", "order"]),
  },
  data() {
    return {
      id: this.$store.state.user.user.id,
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    if (routeTo.params.id == store.state.user.user.id) {
      store.dispatch("user/getOrders", routeTo.params.id).then(() => {
        next();
      });
    } else if (routeTo.params.id !== store.state.user.user.id) {
      next({
        name: "network-issue",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.user {
  &__avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    margin-right: 50px;
  }
  &__info {
    opacity: 0.5;
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

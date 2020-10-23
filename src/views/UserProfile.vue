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
      <div class="">
        <h3>
          {{ user.user.name }}
        </h3>
        <span class="user__info">
          {{ user.user.phone }}
        </span>
      </div>
    </div>
    <h2 class="note__title">
      Orders history:
    </h2>
    <div class="note">
      <div
        class="order__list"
        v-for="order in user.user.orders"
        :key="order.id"
      >
        {{ order }}
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user", "order"])
  },
  data() {
    return {
      id: this.$store.state.user.user.id
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
  }
};
</script>

<style lang="scss" scoped>
.user {
  &__avatar {
    width: 150px;
    height: 150px;
    border-radius: 20px;
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
    justify-content: space-between;
    background-color: white;
  }
}
</style>

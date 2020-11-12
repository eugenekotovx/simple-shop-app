<template lang="html">
  <div class="navigation__controls">
    <BaseButton buttonClass="back-button" @click="goBack()">
      <BaseIcon
        :name="'arrow_left'"
        :width="20"
        :height="20"
        class="arrow__icon-left"
      />
      <span>
        back
      </span>
    </BaseButton>
    <router-link
      tag="div"
      v-if="cart.cart.length >= 1 && this.$route.name !== 'order-create'"
      to="/order-create"
      class="purchase__button"
    >
      <BaseButton buttonClass="button-active">
        <span> {{ cartTotalPrice }}, </span>
        <span class="button__text"> Purchase </span>
        <BaseIcon
          :name="'arrow'"
          :width="20"
          :height="20"
          class="arrow__icon"
        />
      </BaseButton>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["user", "cart"]),
    ...mapGetters("cart", ["cartTotalPrice"])
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.arrow__icon {
  margin-left: 15px;
}

.navigation__controls {
  position: fixed;
  bottom: 30px;
  display: flex;
  right: 50px;
  width: 100%;
}
.purchase__button {
  margin-right: 0px;
  margin-left: auto;
  margin-right: 20px;
}
.back-button {
  display: none;
}

.button__text {
  margin-left: 5px;
}
@media screen and (max-width: 576px) {
  .back-button {
    display: flex;
    margin-left: 20px;
    padding: 7px 10px;
    border-radius: 5px;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    opacity: 0.7;
  }
  .arrow__icon-left {
    transform: rotate(180deg);
    margin-bottom: 2px;
    margin-right: 5px;
  }
  .navigation__controls {
    position: fixed;
    bottom: 0px;
    display: flex;
    right: 0px;
    width: 100%;
    background-color: #f5f5f8;
    padding: 20px 0;
    justify-content: space-between;
  }
  .purchase__button {
    margin-left: 40px;
  }
}
</style>

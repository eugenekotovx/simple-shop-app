<template lang="html">
  <div class="user__menu">
    <template v-if="user.user.login === false">
      <BaseButton
        type="submit"
        @click="openRegistration"
        name="button"
        :buttonClass="'button-active'"
        >Registration
      </BaseButton>
      <modal :adaptive="true" name="registration" classes="global-modal">
        <Registration class="global-registration">
          <BaseButton buttonClass="button-active form__button">
            submit
          </BaseButton>
        </Registration>
      </modal>
    </template>
    <router-link
      :active-class="'link active'"
      class="link"
      v-else
      :to="{
        name: 'user-show',
        params: { id: user.user.id },
      }"
    >
      Profile
    </router-link>
    <router-link v-if="cart.cart.length >= 1" to="/order-create" class="purchase__button">
      <BaseButton buttonClass="button-active">
        <span> {{ cartTotalPrice }}, </span>
        <BaseIcon :name="'cart'" class="cart__icon" />
        Purchase
      </BaseButton>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Registration from "@/components/Registration";
export default {
  components: {
    Registration,
  },
  computed: {
    ...mapState(['user', 'cart']),
    ...mapGetters(['cartTotalPrice'])
  },
  methods: {
    openRegistration() {
      this.$modal.show("registration");
    },
    hideRegistration() {
      this.$modal.hide("registration");
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  &__menu {
    display: flex;
  }
}
.purchase__button {
  position: fixed;
  bottom: 30px;
  right: 50px;
}
</style>

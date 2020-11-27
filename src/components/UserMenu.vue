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
      tag="a"
      :active-class="'link active'"
      class="link"
      v-else
      :to="{
        name: 'user-show',
        params: { id: user.user.id }
      }"
    >
      <BaseIcon :width="24" :height="24" :name="'user'" :iconClass="'menu__icon icon'" />
      <span class="link__text">
        Profile
      </span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Registration from "@/components/Registration";
export default {
  components: {
    Registration
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    openRegistration() {
      this.$modal.show("registration");
    },
    hideRegistration() {
      this.$modal.hide("registration");
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  &__menu {
    display: flex;
  }
}
</style>

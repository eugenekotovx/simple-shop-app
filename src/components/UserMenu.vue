<template lang="html">
  <div class="user__menu">
    <template v-if="this.$store.state.user.user.login === false">
      <BaseButton type="submit"
        @click="openRegistration"
        name="button"
        :buttonClass="'button-active'">Registration
      </BaseButton>
      <modal
      name="registration">
        <Registration/>
      </modal>
    </template>
    <router-link
      :active-class="'link active'" 
      class="link"
      v-else
      :to="{ name: 'user-show', params: { id : this.$store.state.user.user.id }}">
      Profile
    </router-link>
  </div>
</template>

<script>
import Registration from '@/components/Registration'
export default {
  components: {
    Registration
  },
  methods: {
    openRegistration() {
        this.$modal.show('registration');
    },
    hideRegistration () {
        this.$modal.hide('registration');
    }
  }
}
</script>

<style lang="scss" scoped >
  .user {
    &__menu {
      display: flex;
    }
  }
</style>

<template lang="html">
  <div class="userMenu">
    <BaseButton type="submit"
      v-if="!this.$store.state.user.user.login"
      @click="openRegistration"
      name="button">Registration</BaseButton>
    <modal
    name="registration">
      <Registration/>
    </modal>
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

<style lang="css" scoped >

</style>

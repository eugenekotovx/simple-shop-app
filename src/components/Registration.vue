<template lang="html">
  <div class="form">
    <h2 class="form__heading note__title">Registration</h2>
    <form @submit.prevent="registerUser"  class="form__container note">
      <BaseInput
      label="Name:"
      class="form__field"
      v-model="user.name"
      :class="{ error: $v.user.name.$error }"
      @blur="$v.user.name.$touch()"
      />
      <BaseInput
      label="Phone:"
      class="form__field"
      v-model="user.phone"
      :class="{ error: $v.user.phone.$error }"
      @blur="$v.user.phone.$touch()"
      />
      <slot></slot>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      user: this.createUser()
    }
  },
  validations: {
    user: {
      name: { required },
      phone: { required },
    }
  },
  methods: {
    createUser() {
      const id = Math.floor(Math.random() * 1000000)

      return {
        id: id,
        name: '',
        phone: ''
      }
    },
    registerUser() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('user/registerUser', this.user)
      }
    }
  }
}
</script>

<style lang="css" scoped="">
</style>

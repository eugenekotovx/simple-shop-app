<template lang="html">
  <div class="form">
    <form @submit.prevent="registerUser"  class="form__container">
      <h2 class="form__heading">Registration</h2>
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
      <BaseButton buttonClass="button-active" type="submit" name="button">Submit</BaseButton>
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

<style lang="css" scoped >
  .form {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    box-sizing: border-box;
  }
  .form__field {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .form__heading {
    text-align: center;
  }
  .form__button {
    margin: 0 auto;
  }
  h2 {
    margin: 0;
  }
  .form__container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    height: 100%;
    max-width: 50%;
  }
</style>

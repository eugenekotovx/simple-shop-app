<template lang="html">
  <div class="form">
    <form @submit.prevent="registerUser(user)"  class="form__container">
      <h2 class="form__heading">Registration</h2>
      <BaseInput label="Name:" class="form__field" v-model="user.name"/>
      <BaseInput label="Phone:" class="form__field" v-model="user.phone"/>
      <BaseButton type="submit" name="button">Submit</BaseButton>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.createUser(),
      buttonClass: ''
    }
  },
  methods: {
    createUser() {
      const id = Math.floor(Math.random() * 1000000)

      return {
        id: id,
        name: this.name,
        phone: this.phone
      }
    },
    registerUser(user) {
      this.$store.dispatch('user/registerUser', user)
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

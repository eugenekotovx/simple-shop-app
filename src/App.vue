<template>
  <div id="app" class="container">
    <div class="header">
      <NavBar/>
      <UserMenu/>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
import UserMenu from '@/components/UserMenu'
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar,
    UserMenu
  }
}
</script>
<style lang="scss">

body {
  background-color: #F5F5F8;
}
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
}
.note {
  background-color: #ffffff;
  border-radius: 0 0 20px 20px;
  padding: 20px;
  margin-bottom: 40px;
  &__title {
    background: #EDEDED;
    margin: 0;
    padding: 20px;
    border-radius: 20px 20px 0 0;
  }
  &__wrapper {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
}
.cart__icon {
  margin-right: 10px;
}
.header {
  padding: 30px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}
.global-modal {
  background-color: transparent !important;
  box-shadow: none !important;
}
.button {
  background: none;
  border:  2px solid #0f4c75;
  padding: 10px 15px;
  color: #0f4c75;
  opacity: 0.7;
  position: relative;
  margin: 0 auto;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 100%;
    bottom: 0;
    z-index: -1;
    top: 0;
  }
  &:hover {
    color: #bbe1fa;
    opacity: 1;
    transition: .4s;
    cursor: pointer;
  }
  &:hover:before {
    background-color: #0f4c75;
    right: 0%;
    transition: .3s;
  }
}
</style>

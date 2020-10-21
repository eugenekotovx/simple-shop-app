<template>
  <div id="app" class="container">
    <div class="header">
      <NavBar />
      <UserMenu />
    </div>
    <router-view />
  </div>
</template>

<script type="text/javascript">
import UserMenu from "@/components/UserMenu";
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
    UserMenu,
  },
};
</script>
<style lang="scss">
body {
  background-color: #f5f5f8;
}
a {
  text-decoration: none;
}
.vm--modal {
  border-radius: 30px;
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
    background: #ededed;
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
.help-img {
  width: 100%;
}
</style>

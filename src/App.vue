<template>
  <div id="app">
    <div class="header">
      <NavBar />
      <UserMenu />
    </div>
    <router-view  class="container"/>
    <NavigationControls/>
  </div>
</template>

<script type="text/javascript">
import UserMenu from "@/components/UserMenu";
import NavBar from "@/components/NavBar";
import NavigationControls from "@/components/NavigationControls"
export default {
  components: {
    NavBar,
    UserMenu,
    NavigationControls
  }
};
</script>
<style lang="scss">
body {
  background-color: #f5f5f8;
  height: 100%;
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
.note-list {
  &__item {
    display: flex;
    width: 100%;
    padding-bottom: 4px;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    opacity: 0.5;
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
  z-index: 1;
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
  width: 40%;
  display: block;
  margin: 0 auto;
}
.help {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (min-width: 576px) {
  .header {
    max-width: 600px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .container {
    padding: 0 20px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .header {
    background-color: #f5f5f8;
    border-radius: 0 0 20px 20px;
    position: fixed;
    width: 100%;
    top: 0px;
    padding: 20px 20px;
    box-sizing: border-box;
  }
}
</style>

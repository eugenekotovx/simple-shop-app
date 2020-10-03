<template>
  <div id="app" class="container">
    <div class="header">
      <NavBar/>
      <UserMenu/>
    </div>
    <Cart/>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
import UserMenu from '@/components/UserMenu'
import NavBar from '@/components/NavBar'
import Cart from '@/components/Cart'
export default {
  components: {
    NavBar,
    Cart,
    UserMenu
  }
}
</script>
<style lang="scss">

body {
    background-color: #bbe1fa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #1a1a2e;
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
}
.link {
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  color: #1a1a2e;
  &:hover {
    background-color: #0f4c75;
    color: #bbe1fa;
    transition: .2s;
  }
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

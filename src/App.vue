<template>
  <div id="app" class="container">
    <NavBar/>
    <Cart/>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
import NavBar from '@/components/NavBar'
import Cart from '@/components/Cart'
export default {
  components: {
    NavBar,
    Cart
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
</style>

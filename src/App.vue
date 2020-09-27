<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/shop">Shop</router-link>
      <router-link to="/cart">Cart</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
    background-color: #bbe1fa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1a1a2e;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
#nav {
  padding: 30px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    font-weight: bold;
    color: #1a1a2e;
    text-decoration: none;
    padding: 5px 10px;
    &.router-link-exact-active {
      background-color: #0f4c75;
      border-radius: 10px;
      color: #bbe1fa;
      transition: .2s;
    }
  }
}
</style>

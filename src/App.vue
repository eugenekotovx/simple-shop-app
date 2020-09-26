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
    background-color: #1a1a2e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #bbe1fa;
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
  a {
    font-weight: bold;
    color: #bbe1fa;
    text-decoration: none;
    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/basket">Basket</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  color: blue;
  a {
    font-weight: bold;
    color: blue;
    text-decoration: none;
    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>

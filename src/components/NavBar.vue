<template lang="html">
  <div id="nav">
    <router-link :active-class="'active'" class="link" to="/shop/"
      >Shop</router-link
    >
    <router-link :active-class="'active'" class="link" to="/cart" exact
      >Cart</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
}
.link {
  color: #fa4a0c;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    height: 2px;
    background: #fa4a0c;
    bottom: 0;
    left: 0;
    right: 100%;
    border-radius: 4px;
  }
  &:hover::before {
    right: 0;
    transition: 0.2s;
  }
}
.active::before {
  right: 0;
}
.cart__icon {
  position: relative;
  &:hover {
    filter: drop-shadow(0px 0px 55px rgba(254, 32, 0, 0.3));
  }
}
</style>

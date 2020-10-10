<template lang="html">
  <div id="nav">
    <router-link class="link" to="/shop">Shop</router-link>
    <router-link class="link" to="/cart">Cart</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" >
 #nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

<template lang="html">
  <div id="nav">
    <router-link tag="a" :active-class="'active'" class="link" to="/shop/">
      <BaseIcon :name="'shop'" :width="24" :height="24" :iconClass="'menu__icon icon'" />
      <span class="link__text">
        Shop
      </span>
    </router-link>
    <router-link tag="a" :active-class="'active'" class="link" to="/cart" exact>
      <BaseIcon :width="24" :height="24" :name="'cart'" :iconClass="'menu__icon icon'" />
      <span class="link__text">
        Cart
      </span>
    </router-link>
  </div>
</template>

<style lang="scss">
#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin-right: 10px;
}
.link {
  color: #1a1a2e;
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
  &__text {
    font-size: 20px;
    margin-left: 10px;
  }
}
.active .menu__icon {
  opacity: 1;
}

.active {
  color: #fa4a0c;
}

.active .menu__icon {
  stroke: #fa4a0c;
  fill: #fa4a0c;
}

@media screen and (max-width: 768px) {
    .link {
      &__text {
        display: none;
      }
    }
    .active > .link__text {
      display: block;
      transition: .2s;
    }
   }
</style>

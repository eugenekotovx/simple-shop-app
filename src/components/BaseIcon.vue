<template lang="html">
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{ 'xlink:href': '/img/' + name + '.svg#' + name }" />
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>

<style lang="scss">
.icon-wrapper {
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.menu__icon {
  position: relative;
  opacity: 0.3;
  svg {
    fill: black;
  }
  &:hover {
    filter: drop-shadow(0px 0px 55px rgba(254, 32, 0, 0.3));
  }
}
</style>

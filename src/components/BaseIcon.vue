<template lang="html">
  <div class="icon-wrapper">
    <svg :class="iconClass" :width="width" :height="height">
      <use v-bind="{ 'xlink:href': '/img/' + name + '.svg#' + name }" />
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    iconClass: {
      type: String
    },
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
  display: flex;
  align-items: center;
}
.icon {
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: black;
}
.menu__icon {
  position: relative;
  opacity: 0.3;
}
</style>

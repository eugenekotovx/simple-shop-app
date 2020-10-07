<template lang="html">
  <div class="">
    <span>
      {{ user.user.name }}
    </span>
    <span>
      {{ user.user.phone }}
    </span>
    Orders history:
    <template v-for="order in order.orders">
      {{ order }}
    </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['user', 'order'])
  }
}
</script>

<style lang="css" scoped >

</style>

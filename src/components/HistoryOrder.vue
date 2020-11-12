<template lang="html">
  <div class="">
    <div class="order__list" :key="order.id">
      <div class="note-list__header">
        <div class="order-heading__wrapper">
          <div class="order-heading">
            <h3>{{ "Date: " + order.date }}</h3>
            <h3>{{ "Total:" + order.totalPrice }}</h3>
          </div>
          <BaseButton buttonClass="button-active" @click="showOrder">
            Show order
          </BaseButton>
        </div>

        <template v-if="hideOrder === false">
          <div class="note-list__item">
            {{ "Name: " + order.name }}
          </div>
          <div class="note-list__item">
            {{ "Phone number: " + order.phoneNumber }}
          </div>
          <div class="note-list__item">
            {{ order.address.country }}, {{ order.address.street + " street" }},
            {{ "flat " + order.address.flat }},
            {{ "building " + order.address.building }}
          </div>
          <template v-for="product in order.cart">
            <span class="note-list__item" :key="product.id"
              >{{ product.name }} - {{ "x" + product.count }} -
              {{ product.totalItemPrice + "$" }}</span
            >
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideOrder: true
    };
  },
  props: {
    order: {
      type: Object
    }
  },
  methods: {
    showOrder() {
      this.hideOrder = !this.hideOrder;
    }
  }
};
</script>

<style lang="scss" scoped>
.note-list {
  &__header {
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 10px 30px rgba(57, 57, 57, 0.1);
    margin-bottom: 20px;
  }
}
.order-heading__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>

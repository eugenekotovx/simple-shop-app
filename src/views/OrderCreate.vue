<template lang="html">
  <div>
    <transition name="fade" mode="out-in">
      <Registration v-if="user.user.login === false">
        <BaseButton type="submit" buttonClass="button-active">
          next
        </BaseButton>
      </Registration>
      <div v-else>
        <div class="note__wrapper">
          <h2 class="note__title">Order details:</h2>
          <div class="note">
            <div
              class="cart-list"
              v-for="product in cart.cart"
              :key="product.id"
            >
              <span class="cart-list__item">
                {{ product.name }} - {{ "x" + product.count }} -
                {{ product.totalItemPrice + "$" }}</span
              >
            </div>
          </div>
        </div>
        <div class="note__wrapper">
          <h2 class="note__title">Delivery details:</h2>
          <form class="note order-form" @submit.prevent="createOrder" disabled>
            <label class="select-label" for="country-select">Country</label>
            <vSelect
              id="country-select"
              :placeholder="'select country'"
              :options="countries"
              label="name"
              :reduce="country => country.name"
              :class="{ error: $v.order.address.country.$error }"
              class="select"
              v-model="order.address.country"
            >
              <template #search="{attributes, events}">
                <input
                  class="vs__search placeholder"
                  :required="!order.address.country"
                  v-bind="attributes"
                  v-on="events"
                  @blur="$v.order.address.country.$touch()"
                />
              </template>
            </vSelect>
            <BaseInput
              type="text"
              v-model="order.address.street"
              :class="{ error: $v.order.address.street.$error }"
              @blur="$v.order.address.street.$touch()"
              label="Street"
            />
            <div class="field__group">
              <BaseInput
                type="text"
                v-model="order.address.flat"
                class="short"
                :class="{ error: $v.order.address.flat.$error }"
                @blur="$v.order.address.flat.$touch()"
                label="flat"
              />
              <BaseInput
                type="text"
                v-model="order.address.building"
                class="short"
                :class="{ error: $v.order.address.building.$error }"
                @blur="$v.order.address.building.$touch()"
                label="building"
              />
              <BaseInput
                type="text"
                v-model="order.address.frontDoor"
                class="short"
                label="front door"
              />
            </div>
            <BaseInput label="Coupon code" />
            <BaseButton
              type="submit"
              name="button"
              buttonClass="button-active form__button"
              >Submit</BaseButton
            >
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Registration from "@/components/Registration";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { mapState } from "vuex";
import { countries } from "@/components/data/countries.js";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    vSelect,
    Registration
  },
  data() {
    return {
      order: this.createFreshOrder(),
      countries: countries
    };
  },
  validations: {
    order: {
      address: {
        street: { required },
        country: { required },
        flat: { required },
        building: { required }
      }
    }
  },
  computed: {
    ...mapState(["user", "cart"])
  },
  methods: {
    createOrder() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store
          .dispatch("order/setOrder", this.order)
          .then(this.$router.push("/shop"));
      }
    },
    createFreshOrder() {
      const id = Math.floor(Math.random() * 1000000);

      return {
        userId: this.$store.state.user.user.id,
        orderId: id,
        name: this.$store.state.user.user.name,
        phoneNumber: this.$store.state.user.phone,
        address: {
          street: "",
          country: "",
          flat: "",
          frontDoor: "",
          building: ""
        },
        country: "",
        cart: this.$store.state.cart.cart
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.placeholder,
.select-label {
  opacity: 0.5;
}
.field__group {
  display: flex;
  justify-content: space-between;
}
.error {
  border: 1px solid red;
}
.select {
  margin-top: 10px;
  margin-bottom: 10px;
}
.cart-list {
  &__item {
    display: flex;
    width: 100%;
    padding-bottom: 4px;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    opacity: 0.5;
  }
}
.short {
  max-width: 20%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template lang="html">
  <div>
    <transition name="fade" mode="out-in">
      <Registration v-if="user.user.login === false">
        <BaseButton type="submit" buttonClass="button-active">
          next
        </BaseButton>
      </Registration>
      <div v-else-if="user.user.login === true && showBill === false">
        <div class="note__wrapper">
          <h2 class="note__title">Order details:</h2>
          <div class="note">
            <div
              class="note-list"
              v-for="product in cart.cart"
              :key="product.id"
            >
              <span class="note-list__item">
                {{ product.name }} - {{ "x" + product.count }} -
                {{ product.totalItemPrice + "$" }}</span
              >
            </div>
            <span class="total-price"> Total: {{ cartTotalPrice }} </span>
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
            <span class="error-message" v-if="$v.order.address.country.$error"
              >*This field is required</span
            >
            <BaseInput
              type="text"
              v-model="order.address.street"
              :class="{ error: $v.order.address.street.$error }"
              @blur="$v.order.address.street.$touch()"
              label="Street"
            />
            <span class="error-message" v-if="$v.order.address.street.$error"
              >*This field is required</span
            >
            <div class="field__group">
              <div class="short">
                <BaseInput
                  type="text"
                  v-model="order.address.flat"
                  :class="{ error: $v.order.address.flat.$error }"
                  @blur="$v.order.address.flat.$touch()"
                  label="flat"
                />
                <span class="error-message" v-if="$v.order.address.flat.$error"
                  >*This field is required</span
                >
              </div>
              <div class="short">
                <BaseInput
                  type="text"
                  v-model="order.address.building"
                  :class="{ error: $v.order.address.building.$error }"
                  @blur="$v.order.address.building.$touch()"
                  label="building"
                /><span
                  class="error-message"
                  v-if="$v.order.address.building.$error"
                  >*This field is required</span
                >
              </div>
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
      <div v-else-if="showBill">
        <div class="note__wrapper">
          <div class="note__title">
            Bill details
          </div>
          <div class="note">
            <div class="note-list">
              <div class="note-list__item">
                {{ "Date: " + order.date }}
              </div>
              <div class="note-list__item">
                {{ "Name: " + order.name }}
              </div>
              <div class="note-list__item">
                {{ "Phone number: " + order.phoneNumber }}
              </div>
              <div class="note-list__item">
                {{ order.address.country }},
                {{ order.address.street + " street" }},
                {{ "flat " + order.address.flat }},
                {{ "building " + order.address.building }}
              </div>
              <template v-for="product in order.cart">
                <span class="note-list__item" :key="product.id"
                  >{{ product.name }} - {{ "x" + product.count }} -
                  {{ product.totalItemPrice + "$" }}</span
                >
              </template>
              <span class="note-list__item total-price">
                Total: {{ order.totalPrice }}
              </span>
              <router-link tag="div" to="/shop" class="purchase__button">
                <BaseButton buttonClass="button-active">
                  Back to shop page
                </BaseButton>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Registration from "@/components/Registration";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import store from '@/store/index';
import { mapState, mapGetters } from "vuex";
import { countries } from "@/components/data/countries.js";
import { required } from "vuelidate/lib/validators";

const dateFormatter = (createdAt) => {
  let date = new Date(createdAt);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();
  let hours = date.getHours();
  let mins = date.getMinutes();

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  let result = year + "-" + month + "-" + dt + " " + hours + ":" + mins;
  return result;
};


export default {
  components: {
    vSelect,
    Registration
  },
  data() {
    return {
      order: this.createFreshOrder(),
      countries: countries,
      showBill: false,
      tot: this.cartTotalPrice
    };
  },
  computed: {
    ...mapState(["user", "cart"]),
    ...mapGetters('cart', ["cartTotalPrice"])
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
  methods: {
    createOrder() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        store.dispatch("order/setOrder", this.order)
        .then(() => {
          store.dispatch('cart/refreshCart')
          return this.showBill = true;
        })
      }
    },
    createFreshOrder() {
      const id = Math.floor(Math.random() * 1000000);

      return {
        date: dateFormatter(new Date()),
        userId: store.state.user.user.id,
        orderId: id,
        name: store.state.user.user.name,
        phoneNumber: store.state.user.user.phone,
        address: {
          street: "",
          country: "",
          flat: "",
          frontDoor: "",
          building: ""
        },
        totalPrice: store.getters.['cart/cartTotalPrice'],
        country: "",
        cart: store.state.cart.cart
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
.select {
  margin-top: 10px;
  margin-bottom: 10px;
}

.short {
  max-width: 30%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.total-price {
  display: block;
  opacity: 0.5;
  font-size: 24px;
  text-align: right;
}
</style>

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import store from "./store";
import VModal from "vue-js-modal";
import "normalize.css";
import Vuelidate from "vuelidate";
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);
Vue.use(Vuelidate);
Vue.use(VModal);
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

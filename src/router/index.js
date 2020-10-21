import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Shop.vue";
import store from "@/store/index";
import ProductsList from "../views/ProductsList";
import ProductShow from "../views/ProductShow";
import OrderCreate from "../views/OrderCreate";
import UserProfile from "../views/UserProfile";
import NotFound from "../views/NotFound.vue";
import NetworkIssue from "../views/NetworkIssue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/shop",
    name: "Shop",
    component: Home,
  },
  {
    path: "/order-create",
    name: "order-create",
    component: OrderCreate,
  },
  {
    path: "/shop/:category",
    name: "products-list",
    component: ProductsList,
    props: true,
  },
  {
    path: "/user/:id",
    name: "user-show",
    component: UserProfile,
    props: true,
  },
  {
    path: "/shop/:category/:id",
    name: "product-show",
    component: ProductShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("shop/getProduct", routeTo.params)
        .then(() => {
          next();
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({ name: "404", params: { resource: "product" } });
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartShow.vue"),
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "*",
    redirect: { name: "404" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

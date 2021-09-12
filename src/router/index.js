import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  if (store.getters.hasToken) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    meta: {
      title: "Login"
    },
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    meta: {
      title: "Signup"
    },
    path: "/sign-up",
    name: "signup",
    component: () => import("../views/SignUp.vue")
  },
  {
    meta: {
      title: "Dashboard"
    },
    path: "/",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: "Tabela de Acoes"
    },
    path: "/stock-table",
    name: "stockTable",
    component: () => import("../views/TablesStocks.vue"),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: "Tabela de Investimentos"
    },
    path: "/wallet-table",
    name: "walletTable",
    component: () => import("../views/TablesInvestiments.vue"),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: "Carregar Inv"
    },
    path: "/load-invest",
    name: "loadInvest",
    beforeEnter: ifAuthenticated,
    component: () => import("../views/LoadInvest.vue")
  },
  {
    meta: {
      title: "Carregar Acoes"
    },
    path: "/load-stocks",
    name: "loadStocks",
    beforeEnter: ifAuthenticated,
    component: () => import("../views/LoadStocks.vue")
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
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
    component: () =>
      import(/* webpackChunkName: "tables" */ "../views/Login.vue")
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard"
    },
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: "Tabela de Acoes"
    },
    path: "/stock-table",
    name: "stockTable",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tables" */ "../views/TablesStocks.vue"),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: "Carteira"
    },
    path: "/wallet-table",
    name: "walletTable",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "tables" */ "../views/TablesInvestiments.vue"
      ),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: "Profile"
    },
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: "New Client"
    },
    path: "/client/new",
    name: "client.new",
    component: () =>
      import(/* webpackChunkName: "client-form" */ "../views/ClientForm.vue")
  },
  {
    meta: {
      title: "Edit Client"
    },
    path: "/client/:id",
    name: "client.edit",
    component: () =>
      import(/* webpackChunkName: "client-form" */ "../views/ClientForm.vue"),
    props: true
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

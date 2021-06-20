<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'
=======
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);
>>>>>>> origin/dashboard_bf_frontend

const ifAuthenticated = (to, from, next) => {
  if (store.getters.hasToken) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
<<<<<<< HEAD
    path: '/',
    name: 'Home',
=======
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
>>>>>>> origin/dashboard_bf_frontend
    component: Home,
    beforeEnter: ifAuthenticated
  },
  {
<<<<<<< HEAD
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
=======
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
>>>>>>> origin/dashboard_bf_frontend

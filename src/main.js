<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "./assets/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";


createApp(App).use(router).use(store).mount('#app')
=======
/* Styles */
import "@/scss/main.scss";

/* Core */
import Vue from "vue";
import Buefy from "buefy";

/* Router & Store */
import router from "./router";
import store from "./store";

/* Vue. Main component */
import App from "./App.vue";

/* Default title tag */
const defaultDocumentTitle = "Bufunfa";

/* Collapse mobile aside menu on route change & set document title from route meta */
router.afterEach(to => {
  store.commit("asideMobileStateToggle", false);

  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`;
  } else {
    document.title = defaultDocumentTitle;
  }
});

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
>>>>>>> origin/dashboard_bf_frontend

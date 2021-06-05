<template>
  <section class="hero is-success">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end" v-if="hasToken">
              <span class="navbar-item">
                  <span class="subtitle is-4">Bem vindo, {{ getUsername }}!</span>
              </span>
            </div>
            <div class="navbar-end" v-if="hasToken">
              <span class="navbar-item">
                <a @click="logout">
                  <router-link
                    class="button is-success is-focused has-text-weight-bold"
                    to="/login"
                  >
                    <span class="">Sair</span>
                    <span class="icon">
                      <i class="fas fa-sign-out-alt fa-lg"></i>
                    </span>
                  </router-link>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <p class="title">
        Bufunfa
      </p>
      <p class="subtitle">
        O jeito mais fácil de acompanhar sua carteira de ações
      </p>
    </div>
    <div class="hero-foot" v-if="hasToken">
      <nav-tab :tabs="tabs" />
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import NavTab from "./NavTab.vue";

export default {
  components: { NavTab },
  computed: {
    ...mapGetters(["hasToken", "getUsername"]),
  },
  setup() {
    const tabs = [
      { index: "investimentos", tabName: "Lista de Investimentos" },
      { index: "acoes", tabName: "Lista de Ações" },
      { index: "load_investments", tabName: "Carregar Investimentos" },
      { index: "load_acoes", tabName: "Carregar Ações" },
    ];
    return { tabs };
  },
  methods: {
    ...mapActions(["AUTH_LOGOUT", "CLEAR_INVESTMENT_LIST", "CLEAR_STOCK_LIST"]),
    logout() {
      this.AUTH_LOGOUT();
      this.CLEAR_INVESTMENT_LIST();
      this.CLEAR_STOCK_LIST();
    },
  },
};
</script>

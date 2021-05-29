<template>
  <section class="hero is-primary">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end" v-if="!hasToken">
              <span class="navbar-item">
                <router-link class="button is-info is-inverted" to="/login"
                  >Entrar</router-link
                >
              </span>
              <span class="navbar-item">
                <router-link class="button is-info is-inverted" to="/signup"
                  >Cadastrar</router-link
                >
              </span>
            </div>
            <div class="navbar-end" v-if="hasToken">
              <span class="navbar-item">
                <a @click="logout">
                  <router-link class="button is-info is-inverted" to="/login"
                    >Logout</router-link
                  >
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
        Sistema para acompanhar carteira de ações
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
    ...mapGetters(["hasToken"]),
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
    ...mapActions(["AUTH_LOGOUT"]),
    logout() {
      this.AUTH_LOGOUT();
    },
  },
};
</script>

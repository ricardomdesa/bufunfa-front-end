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
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active">
              <a>Investimentos</a>
            </li>
            <li>
              <a>Lista de Ações</a>
            </li>
            <li>
              <a>Carregar ações</a>
            </li>
            <li>
              <a>Carregar Investimentos</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["hasToken"]),
  },
  methods: {
    ...mapActions(["AUTH_LOGOUT"]),
    logout() {
      this.AUTH_LOGOUT();
    },
  },
};
</script>

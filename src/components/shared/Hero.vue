<template>
  <section class="hero is-success">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end" v-if="!hasToken">

                <!--
                 <span class="navbar-item">
                <router-link class="button is-success has-text-weight-bold" to="/login">
                  <span class="">Entrar</span>
                  <span class="icon">
                    <i class="fas fa-sign-in-alt fa-lg"></i>
                  </span>
                  </router-link>
                </span>
                  -->
              <!--
              <span class="navbar-item">
                <router-link class="button is-success has-text-weight-bold" to="/signup"
                  >Cadastrar</router-link>
              </span>
              -->
            </div>
            <div class="navbar-end" v-if="hasToken">
              <span class="navbar-item">
                <a @click="logout">
                  <router-link class="button is-success is-focused has-text-weight-bold" to="/login">
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
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active has-text-dark has-text-weight-semibold">
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
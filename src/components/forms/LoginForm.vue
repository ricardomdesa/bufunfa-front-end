<template>
  <div class="container mt-6">
    <div class="columns is-centered">
      <div class="column is-flex is-narrow">
        <form class="box" @submit.prevent="login">
          <h2 class="title is-5 has-text-centered">Acesso</h2>
          <div class="field">
            <div class="control">
              <input
                class="input"
                required
                v-model="username"
                type="text"
                placeholder="Usuario"
              />
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left">
              <input
                class="input"
                required
                v-model="password"
                type="password"
                placeholder="Senha"
              /><span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <button class="button is-success" type="submit">
                Entrar
              </button>
          </div>
            <div class="column is-full">
              <p class="">Não tem uma conta?</p>
              <router-link class="has-text-success-dark" to="/signup">
              Cadastrar</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions } from "vuex";
export default {
  name: "login-component",

  setup() {
    const username = ref("");
    const password = ref("");
    return { username, password };
  },
  methods: {
    ...mapActions(["AUTH_REQUEST", "CLEAR_ERROR_MESSAGES"]),
    login() {
      const { username, password } = this;
      this.AUTH_REQUEST({ username, password }).then(() =>
        this.$router.push("/")
      );
    },
  },
};
</script>

<template>
  <div class="container mt-6">
    <div class="columns is-centered">
      <div class="column is-flex is-narrow">
        <form class="box" @submit.prevent="signup">
          <h2 class="title is-5 has-text-centered">Cadastrar novo usuário</h2>
          <div class="field">
            <div class="control">
              <input
                class="input"
                required
                v-model="name"
                type="text"
                placeholder="Nome"
              />
            </div>
          </div>
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
          <div class="field">
            <div class="control has-icons-left">
              <input
                class="input"
                required
                v-model="confirmPassword"
                type="password"
                placeholder="Repetir senha"
              /><span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <button class="button is-success" type="submit">
                Cadastrar
              </button>
          </div>
            <div class="column is-full">
              <p class="">Já tenho conta</p>
              <router-link class="has-text-success-dark" to="/login">
              Entrar</router-link>
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
  name: "signup-component",

  setup() {
    const name = ref("");
    const username = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    return { name, username, password, confirmPassword };
  },
  methods: {
    ...mapActions(["SIGNUP_REQUEST", "CLEAR_ERROR_MESSAGES"]),
    signup() {
      const { name, username, password, confirmPassword } = this;
      this.SIGNUP_REQUEST({
        name,
        username,
        password,
        confirmPassword,
      }).then(() => this.$router.push("/login"));
    },
  },
};
</script>

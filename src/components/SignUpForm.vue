<template>
  <div class="container mt-6">
    <div class="columns is-centered">
      <div class="column is-flex is-narrow">
        <form class="box" @submit.prevent="signup">
          <h2 class="title is-5">Cadastrar novo usuário</h2>
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
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  required
                  v-model="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left">
              <input
                class="input"
                required
                v-model="password"
                type="password"
                placeholder="********"
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
                placeholder="********"
              /><span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <button class="button shopee-btn is-primary" type="submit">
              Cadastrar
            </button>
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

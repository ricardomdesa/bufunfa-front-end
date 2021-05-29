<template>
  <div class="container mt-6">
    <div class="columns is-centered">
      <div class="column is-flex is-narrow">
        <form class="box" @submit.prevent="login">
          <h2 class="title is-5">Entrar</h2>
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
            <button class="button shopee-btn is-primary" type="submit">
              Login
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

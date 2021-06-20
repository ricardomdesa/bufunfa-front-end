<template>
<<<<<<< HEAD
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
=======
  <div>
    <hero-bar>
      Entrar
      <router-link slot="right" to="/sign-up" class="button is-info">
        Cadastrar
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification class="is-danger" v-if="hasErrorMessages">
        <div>
          <b-icon icon="buffer" custom-size="default" />
          <b v-for="erro in getErrorMessages" :key="erro">{{ erro }}</b>
        </div>
      </notification>
      <card-component>
        <form @submit.prevent="submit">
          <b-field label="Usuario" horizontal class="">
            <b-field>
              <b-input
                v-model="form.username"
                icon="account"
                placeholder="username"
                name="username"
                required
              />
            </b-field>
          </b-field>
          <b-field label="Senha" horizontal>
            <b-field
              label="Password"
              :type="shortPasswdAlert ? 'is-warning' : ''"
              :message="
                shortPasswdAlert
                  ? [
                      'Password is too short',
                      'Password must have at least 8 characters'
                    ]
                  : []
              "
            >
              <b-input
                v-model="form.password"
                type="password"
                maxlength="30"
                password-reveal
                @blur="shortPasswdAlert = form.password.length < 5"
                required
              ></b-input>
            </b-field>
          </b-field>
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button native-type="submit" type="is-primary"
                  >Entrar</b-button
                >
              </div>
              <div class="control">
                <b-button type="is-primary is-outlined" @click="reset"
                  >Reset</b-button
                >
              </div>
            </b-field>
          </b-field>
        </form>
      </card-component>
    </section>
>>>>>>> origin/dashboard_bf_frontend
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import Notification from "@/components/Notification";
import mapValues from "lodash/mapValues";
import CardComponent from "@/components/CardComponent";
import HeroBar from "@/components/HeroBar";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Forms",
  components: {
    HeroBar,
    Notification,
    CardComponent
  },
  data() {
    return {
      shortPasswdAlert: false,
      form: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["hasErrorMessages", "getErrorMessages"])
  },
  methods: {
    ...mapActions(["AUTH_REQUEST"]),
    submit() {
      this.AUTH_REQUEST(this.form).then(() => {
        this.$store.commit("user", {
          name: this.form.username,
          email: "",
          avatar: "https://avatars.dicebear.com/v2/gridy/John-Doe.svg"
        });
        this.$router.push("/");
      });
    },
    reset() {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === "object") {
          return [];
        }
        return null;
      });

      this.$buefy.snackbar.open({
        message: "Reset successfully",
        queue: false
      });
    }
  }
>>>>>>> origin/dashboard_bf_frontend
};
</script>

<template>
  <div>
    <hero-bar>
      Cadastro
      <router-link slot="right" to="/login" class="button is-info">
        Entrar
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
          <b-field label="Nome" horizontal class="">
            <b-field>
              <b-input
                v-model="form.name"
                icon="account"
                placeholder="name"
                name="name"
                required
              />
            </b-field>
          </b-field>
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
              :type="shortPasswdAlert ? 'is-warning' : ''"
              :message="
                shortPasswdAlert
                  ? [
                      'Password is too short',
                      'Password must have at least 6 characters'
                    ]
                  : []
              "
            >
              <b-input
                v-model="form.password"
                type="password"
                maxlength="30"
                password-reveal
                @blur="shortPasswdAlert = form.password.length < 6"
                required
              ></b-input>
            </b-field>
          </b-field>
          <b-field label="Repita a senha" horizontal>
            <b-field
              :type="diffPasswdAlert ? 'is-warning' : ''"
              :message="diffPasswdAlert ? ['Senhas precisam ser iguais'] : []"
            >
              <b-input
                v-model="form.confirmPassword"
                type="password"
                maxlength="30"
                password-reveal
                @blur="diffPasswdAlert = form.confirmPassword !== form.password"
                required
              ></b-input>
            </b-field>
          </b-field>
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button native-type="submit" type="is-primary"
                  >Cadastrar</b-button
                >
              </div>
              <div class="control">
                <b-button type="is-primary is-outlined" @click="reset"
                  >Reset campos</b-button
                >
              </div>
            </b-field>
          </b-field>
        </form>
      </card-component>
    </section>
  </div>
</template>

<script>
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
      diffPasswdAlert: false,
      form: {
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  computed: {
    ...mapGetters(["hasErrorMessages", "getErrorMessages"])
  },
  methods: {
    ...mapActions(["SIGNUP_REQUEST"]),
    submit() {
      console.log(this.form);
      this.SIGNUP_REQUEST(this.form).then(() => {
        this.$router.push("/login");
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
};
</script>

<template>
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
};
</script>

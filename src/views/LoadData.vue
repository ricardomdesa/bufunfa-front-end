<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Carregar investimentos
      <router-link slot="right" to="/" class="button">
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification class="is-danger" v-if="hasErrorMessages">
        <div>
          <b-icon icon="buffer" custom-size="default" />
          <b v-for="erro in getErrorMessages" :key="erro">{{ erro }}</b>
        </div>
      </notification>
      <file-input />
      <hr />
      <div class="block level-item">
        <button class="button is-primary" @click="carregar">
          Carregar informações
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import FileInput from "@/components/FileInput.vue";
import Notification from "../components/Notification.vue";
export default {
  name: "Profile",
  components: {
    HeroBar,
    TitleBar,
    FileInput,
    Notification
  },
  computed: {
    titleStack() {
      return ["Admin", "Load"];
    },
    ...mapState(["userName", "userEmail"]),
    ...mapGetters(["getFile", "getErrorMessages", "hasErrorMessages"])
  },
  methods: {
    ...mapActions(["LOAD_INVESTMENTS", "LOAD_STOCKS"]),
    carregar() {
      this.LOAD_INVESTMENTS(this.getFile);
      this.LOAD_STOCKS(this.getFile);
    }
  }
};
</script>

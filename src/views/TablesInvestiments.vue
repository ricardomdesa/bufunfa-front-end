<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Carteira
      <div slot="right">
        <router-link to="/" class="button">
          Dashboard
        </router-link>
      </div>
    </hero-bar>
    <section class="section is-main-section">
      <notification class="is-info" v-show="false">
        <div>
          <b-icon icon="buffer" custom-size="default" />
          <b>Carteira carregada com sucesso</b>
        </div>
      </notification>

      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Investimentos"
        icon="table-large"
      >
        <wallet-table-model
          :data-url="`${$router.options.base}data-sources/investiments.json`"
          :checkable="false"
          :itensPerPage="10"
        />
      </card-component>

      <div v-if="false">
        <hr />

        <notification class="is-info">
          <div>
            <b-icon icon="buffer" custom-size="default" />
            <b>Empty table.</b> When there's nothing to show
          </div>
        </notification>

        <card-component class="has-table has-thead-hidden">
          <wallet-table-model />
        </card-component>
      </div>
    </section>
  </div>
</template>

<script>
import Notification from "@/components/Notification";
import CardComponent from "@/components/CardComponent";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import WalletTableModel from "../components/WalletTableModel.vue";
import { mapActions } from "vuex";
export default {
  name: "Tables",
  components: {
    HeroBar,
    TitleBar,
    CardComponent,
    WalletTableModel,
    Notification
  },
  computed: {
    titleStack() {
      return ["Admin", "Carteira"];
    }
  },
  methods: {
    ...mapActions(["FETCH_PRICES"])
  },
  mounted() {
    this.FETCH_PRICES();
  }
};
</script>

<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="piggy-bank"
          :number="getDashInfo.assets"
          prefix="R$ "
          label="Patrimonio"
        />
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="chart-line"
          :number="getDashInfo.income_perc"
          sufix=" %"
          label="Rendimento%"
          v-if="getDashInfo.income_perc > 0"
        />
        <card-widget
          class="tile is-child"
          type="is-danger"
          icon="chart-line"
          :number="getDashInfo.income_perc"
          sufix=" %"
          label="Rendimento %"
          v-else
        />
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="chart-line"
          :number="getDashInfo.income_value"
          prefix="R$ "
          label="Rendimento R$"
          v-if="getDashInfo.income_value > 0"
        />
        <card-widget
          class="tile is-child"
          type="is-danger"
          icon="chart-line"
          :number="getDashInfo.income_value"
          prefix="R$ "
          label="Rendimento R$"
          v-else
        />
      </tiles>
      <card-component title="Carteira" class="has-table has-mobile-sort-spaced">
        <wallet-table-model />
      </card-component>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import Tiles from "@/components/Tiles";
import CardWidget from "@/components/CardWidget";
import WalletTableModel from "../components/WalletTableModel.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    CardWidget,
    Tiles,
    HeroBar,
    TitleBar,
    WalletTableModel
  },
  computed: {
    ...mapGetters(["getDashInfo"]),
    titleStack() {
      return ["Admin", "Dashboard"];
    }
  },
  methods: {
    ...mapActions(["GET_DASHBOARD_INFO"])
  },
  mounted() {
    this.GET_DASHBOARD_INFO();
    this.$buefy.snackbar.open({
      message: "Welcome back",
      queue: false
    });
  }
};
</script>

<template>
  <div>
<<<<<<< HEAD
    <div v-if="getCurrentTab === 'investimentos'">
      <investments-list />
    </div>
    <div v-if="getCurrentTab === 'acoes'">
      <stock-list />
    </div>
    <div class="box block" v-if="getCurrentTab === 'load_investments'">
      <div class="block">
        <file-input />
      </div>
      <button class="button is-primary" @click="loadInvest">
        Carregar Investimentos
      </button>
    </div>
    <div class="box block" v-if="getCurrentTab === 'load_acoes'">
      <div class="block">
        <file-input />
      </div>
      <button class="button is-primary" @click="loadStocks">
        Carregar Ações
      </button>
    </div>
=======
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
>>>>>>> origin/dashboard_bf_frontend
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapActions, mapGetters } from "vuex";
// @ is an alias to /src
import InvestmentsList from "../components/InvestmentsList.vue";
import FileInput from "../components/shared/drag-n-drop/FileInput.vue";
import StockList from "../components/StockList.vue";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["getCurrentTab", "getFile"]),
  },
  components: {
    InvestmentsList,
    FileInput,
    StockList,
  },
  methods: {
    ...mapActions(["LOAD_INVESTMENTS", "CLEAR_FILE", "LOAD_STOCKS"]),
    loadInvest() {
      const data = new FormData();
      data.append("investment_file", this.getFile);
      this.LOAD_INVESTMENTS(data);
      this.CLEAR_FILE();
    },
    loadStocks() {
      const data = new FormData();
      data.append("stock_file", this.getFile);
      this.LOAD_STOCKS(data);
      this.CLEAR_FILE();
    },
  },
};
</script>
<style scoped>
div {
  -webkit-font-smoothing: antialiased !important;
  text-align: center;
  /* color: #2c3e50; */
  color: rgba(0, 0, 0, 0.87);
  padding-top: 20px;
}
</style>
=======
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
>>>>>>> origin/dashboard_bf_frontend

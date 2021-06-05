<template>
  <div>
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
  </div>
</template>

<script>
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

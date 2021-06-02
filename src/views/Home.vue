<template>
  <div>
    <div v-if="getCurrentTab === 'investimentos'">
      <investments-list />
    </div>
    <div v-if="getCurrentTab === 'acoes'"></div>
    <div class="box block" v-if="getCurrentTab === 'load_investments'">
      <file-input />
      <button class="button" @click="loadInvest">
        Carregar Investimentos
      </button>
    </div>
    <div v-if="getCurrentTab === 'load_acoes'">
      <file-input />
      <button class="button" @click="loadStocks">
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

export default {
  name: "Home",
  computed: {
    ...mapGetters(["getCurrentTab", "getFile"]),
  },
  components: {
    InvestmentsList,
    FileInput,
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

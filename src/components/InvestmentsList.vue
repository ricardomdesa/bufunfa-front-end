<template>
  <div class="box">
    <div class=" box level">
      <button class="button is-info level-left" @click="updatePrices">
        Atualizar preço atual
      </button>
      <button class="button is-info level-right" @click="insertMovimentation">
        Inserir movimentação
      </button>
    </div>
    <table class="table container">
      <thead>
        <tr>
          <th><abbr title="Corretora">Corretora</abbr></th>
          <th><abbr title="Codigo">Codigo</abbr></th>
          <th><abbr title="Valor medio">Valor medio</abbr></th>
          <th><abbr title="Quantidade">Qtde</abbr></th>
          <th><abbr title="Preco atual">Valor Atual</abbr></th>
          <th><abbr title="Rendimento">Rend. %</abbr></th>
          <th><abbr title="Rendimento">Rend. R$</abbr></th>
          <th><abbr title="Valor investido ">Valor investido</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="investment in getInvestmentList" :key="investment">
          <td>{{ investment.corretora }}</td>
          <td>{{ investment.codigo }}</td>
          <td>{{ investment.valor_medio }}</td>
          <td>{{ investment.quantidade }}</td>
          <td>{{ investment.current_stock_price }}</td>
          <td>{{ Math.round(investment.rendimento * 100, 2) }} %</td>
          <td>
            {{
              Math.round(
                investment.valor_investido_atual -
                  investment.quantidade * investment.valor_medio
              )
            }}
          </td>
          <td>{{ investment.valor_investido_atual }}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
    <div v-if="insertMovimentationVisible">
      <modal @close="insertMovimentationVisible = false">
        <template v-slot:header>
          <span>Inserir nova movimentação </span>
        </template>
        <template v-slot:body>
          <div >
            <label for="acao">acao</label>
            <input type="field text" value="acao">
          </div>
        </template>
      </modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import modal from "@/components/shared/modal/Modal.vue"
export default {
  name: "InvestmentsList",
  components:{
    modal
  },
  data(){
    return {
      insertMovimentationVisible: false
    }
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(["getInvestmentList"]),
  },
  methods: {
    ...mapActions(["GET_INVESTMENTS", "FETCH_PRICES"]),
    updatePrices() {
      this.FETCH_PRICES();
    },
    insertMovimentation() {
      this.insertMovimentationVisible = true;
      console.log("TODO: insert movimentation in backend");
    },
  },
  mounted() {
    this.GET_INVESTMENTS();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

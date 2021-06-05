<template>
  <div class="box">
    <div class="box level">
      <div class="level-item">
        <button class="button is-info" @click="updatePrices">
          <span> Atualizar preço atual </span>
          <span class="icon">
            <i class="fas fa-sync fa-lg"></i>
          </span>
        </button>
      </div>
      <div class="level-item">
        <button class="button is-info" @click="insertMovimentation">
          <span>Inserir movimentação</span>
          <span class="icon">
            <i class="fas fa-plus fa-lg"></i>
          </span>
        </button>
      </div>
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
      <modal>
        <template v-slot:header>
          <span>Adicionar nova movimentação </span>
        </template>
        <template v-slot:body>
          <moviment-form @close="insertMovimentationVisible = false" />
        </template>
      </modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import modal from "@/components/shared/modal/Modal.vue";
import MovimentForm from "./forms/MovimentForm.vue";
export default {
  name: "InvestmentsList",
  components: {
    modal,
    MovimentForm,
  },
  data() {
    return {
      insertMovimentationVisible: false,
    };
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
    },
  },
  mounted() {
    this.GET_INVESTMENTS();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

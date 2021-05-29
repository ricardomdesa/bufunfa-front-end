<template>
  <div class="box">
    <table class="table container">
      <thead>
        <tr>
          <th><abbr title="Corretora">Corretora</abbr></th>
          <th><abbr title="Codigo">Codigo</abbr></th>
          <th><abbr title="Valor medio">Valor medio</abbr></th>
          <th><abbr title="Quantidade">Qtde</abbr></th>
          <th><abbr title="Preco atual">Valor Atual</abbr></th>
          <th><abbr title="Rendimento">Rendimento</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="investment in getInvestmentList" :key="investment">
          <td>{{ investment.corretora }}</td>
          <td>{{ investment.codigo }}</td>
          <td>{{ investment.valor_medio }}</td>
          <td>{{ investment.quantidade }}</td>
          <td>{{ investment.current_stock_price }}</td>
          <td>{{ investment.rendimento }}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "InvestmentsList",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(["getInvestmentList"]),
  },
  methods: {
    ...mapActions(["GET_INVESTMENTS"]),
  },
  mounted() {
    this.GET_INVESTMENTS();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

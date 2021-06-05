<template>
  <div class="box">
    <table class="table container">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Codigo</th>
          <th>Valor Atual</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in getStockList" :key="stock">
          <td>{{ stock.stock_name }}</td>
          <td>{{ stock.stock_code }}</td>
          <td>{{ stock.stock_current_price }}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "StockList",
  data() {
    return {};
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(["getStockList"]),
  },
  methods: {
    ...mapActions(["GET_STOCKS"]),
  },
  mounted() {
    this.GET_STOCKS();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

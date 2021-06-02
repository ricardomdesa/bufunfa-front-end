<template>
  <div>
    <div class="select">
      <select v-model="selected">
        <option
          v-for="stock in getStockList"
          :key="stock.stock_code"
          :value="stock.stock_code"
          >{{ stock.stock_code }}</option
        >
      </select>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Quantidade</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="number"
              placeholder="qtde"
              v-model="quantity"
            />
          </p>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Preço</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="number"
              placeholder="preço"
              v-model="price"
            />
          </p>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label for="label">Tipo operacao</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="text"
              placeholder="Tipo operação"
              v-model="opType"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "moviment-form",
  computed: {
    ...mapGetters(["getStockList"]),
  },
  methods: {
    ...mapActions(["GET_STOCKS"]),
    mounted() {
      this.GET_STOCKS();
    },
  },
  data() {
    return {
      selected: "Selecione uma ação",
      quantity: 0,
      price: 0.0,
      opType: null,
    };
  },
};
</script>

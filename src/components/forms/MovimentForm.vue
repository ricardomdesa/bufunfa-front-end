<template>
  <form class="box" name="movimentForm" @submit.prevent="insert">
    <div class="field">
      <label class="label">Corretora</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="XP, Inter"
          v-model="corretora"
          required
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Ação</label>
      <div class="control">
        <span class="select is-fullwidth">
          <select v-model="selectedStock">
            <option
              v-for="stock in getStockList"
              :key="stock.stock_code"
              :value="stock.stock_code"
              required
              >{{ stock.stock_code }}</option
            >
          </select>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Quantidade</label>
      <div class="control">
        <input
          class="input"
          type="number"
          placeholder="0"
          v-model="quantity"
          required
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Preço</label>
      <div class="control">
        <input
          class="input"
          type="number"
          placeholder="0"
          v-model="price"
          required
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Data operacao</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="YYYY-mm-dd"
          v-model="opDate"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Tipo operacao</label>
      <div class="control">
        <div class="select block is-fullwidth">
          <select v-model="selectedType">
            <option v-for="type in typeList" :key="type" :value="type">{{
              type
            }}</option>
          </select>
        </div>
      </div>
    </div>
    <hr />
    <div class="block level">
      <button class="button is-info submit level-item">
        Adicionar
      </button>
      <button class="button is-danger level-item" @click="cancelBtn">Cancelar</button>
    </div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "moviment-form",
  computed: {
    ...mapGetters(["getStockList"]),
  },
  data() {
    return {
      selectedType: null,
      selectedStock: null,
      corretora: "",
      quantity: null,
      price: null,
      opDate: null,
      typeList: ["Compra", "Venda"],
    };
  },
  methods: {
    ...mapActions(["GET_STOCKS", "INSERT_TRANSACTION"]),
    insert() {
      const {
        selectedType,
        selectedStock,
        corretora,
        quantity,
        price,
        opDate,
      } = this;

      if (selectedStock && selectedType) {
        this.INSERT_TRANSACTION({
          selectedType,
          selectedStock,
          corretora,
          quantity,
          price,
          opDate,
        });

        this.$emit("close");
      }
    },
    cancelBtn() {
      this.$emit("close");
    },
  },
  mounted() {
    this.GET_STOCKS();
  },
};
</script>
<style scoped>
label {
  text-align: left;
}
</style>

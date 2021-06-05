<template>
  <form class="form" name="movimentForm" @submit.prevent="insert">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Corretora</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="text"
              placeholder="corretora..."
              v-model="corretora"
            />
          </p>
        </div>
      </div>
    </div>
    <div class="field is-horizontal ">
      <div class="field-label is-normal">
        <label class="label">Ação</label>
      </div>
      <select class="select is-fullwidth" v-model="selectedStock">
        <option
          v-for="stock in getStockList"
          :key="stock.stock_code"
          :value="stock.stock_code"
          placeholder="Selecione ação"
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
        <label class="label">Data operacao</label>
      </div>
      <!-- <DatePicker :v-model="dateRange" :dateLimitInDays="7" /> -->
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Tipo operacao</label>
      </div>
      <div class="select block is-fullwidth">
        <select v-model="selected">
          <option
            v-for="type in typeList"
            :key="type"
            :value="type"
            placeholder="Selecione o tipo"
            >{{ type }}</option
          >
        </select>
      </div>
    </div>
    <hr />
    <div class="block">
      <button class="button is-info submit">
        Adicionar
      </button>
    </div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import DatePicker from "@/components/shared/input/DatePicker.vue";
export default {
  name: "moviment-form",
  components: {
    // DatePicker,
  },
  computed: {
    ...mapGetters(["getStockList"]),
  },
  methods: {
    ...mapActions(["GET_STOCKS"]),
    insert() {
      console.log("insert form submmit");
      this.$emit("close");
    },
  },
  mounted() {
    this.GET_STOCKS();
  },
  data() {
    return {
      selected: "",
      selectedStock: "Selecione uma ação",
      corretora: "",
      quantity: 100,
      price: 0.0,
      opType: null,
      data: "",
      typeList: ["Compra", "Venda"],
      dateRange: null,
    };
  },
};
</script>

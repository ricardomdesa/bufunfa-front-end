<template>
  <div>
    <modal-box
      :is-active="isModalActive"
      :trash-object-name="trashObjectName"
      @confirm="trashConfirm"
      @cancel="trashCancel"
    />
    <b-table
      :checked-rows.sync="checkedRows"
      :checkable="checkable"
      :loading="isLoading"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      default-sort="preco_medio"
      default-sort-direction="desc"
      :data="investiments"
    >
      <!-- <b-table-column
        cell-class="has-no-head-mobile is-image-cell"
        v-slot="props"
      >
        <div class="image">
          <img :src="props.row.logo" class="is-rounded" />
        </div>
      </b-table-column> -->
      <b-table-column label="Corretora" field="corretora" v-slot="props">
        {{ props.row.corretora }}
      </b-table-column>
      <b-table-column label="Código" field="codigo" sortable v-slot="props">
        {{ props.row.codigo }}
      </b-table-column>
      <b-table-column
        label="Preço medio"
        field="preco_medio"
        @sort="sortPrecoMedio"
        sortable
        numeric
        v-slot="props"
      >
        {{ props.row.valor_medio }}
      </b-table-column>
      <b-table-column label="Qtde" field="qtde" sortable v-slot="props">
        {{ props.row.quantidade }}
      </b-table-column>
      <b-table-column
        label="Preço atual"
        field="current_price"
        numeric
        v-slot="props"
      >
        {{ props.row.current_stock_price }}
      </b-table-column>
      <b-table-column label="Rend. %" field="p_rend" numeric v-slot="props">
        <span
          :class="[
            'tag',
            { 'is-danger': props.row.rendimento <= 0 },
            { 'is-success': props.row.rendimento > 0 }
          ]"
        >
          {{ Math.round(props.row.rendimento * 100, 2) }}
        </span>
      </b-table-column>
      <b-table-column label="Rend. $" field="v_rend" numeric v-slot="props">
        <span
          :class="[
            'tag',
            { 'is-danger': props.row.rendimento <= 0 },
            { 'is-success': props.row.rendimento > 0 }
          ]"
        >
          {{
            Math.round(
              props.row.valor_investido_atual - props.row.valor_investido,
              2
            )
          }}
        </span>
      </b-table-column>
      <b-table-column
        label="Total investido"
        field="total_inv"
        numeric
        v-slot="props"
      >
        <strong>{{ props.row.valor_investido_atual }}</strong>
      </b-table-column>
      <b-table-column
        custom-key="actions"
        cell-class="is-actions-cell"
        v-slot="props"
      >
        <div class="buttons is-right">
          <router-link
            :to="{ name: 'walletTable', params: { id: props.row.id } }"
            class="button is-small is-primary"
          >
            <b-icon icon="account-edit" size="is-small" />
          </router-link>
          <button
            class="button is-small is-danger"
            type="button"
            @click.prevent="trashModal(props.row)"
          >
            <b-icon icon="trash-can" size="is-small" />
          </button>
        </div>
      </b-table-column>

      <section slot="empty" class="section">
        <div class="content has-text-grey has-text-centered">
          <template v-if="isLoading">
            <p>
              <b-icon icon="dots-horizontal" size="is-large" />
            </p>
            <p>Fetching data...</p>
          </template>
          <template v-else>
            <p>
              <b-icon icon="emoticon-sad" size="is-large" />
            </p>
            <p>Nothing's here&hellip;</p>
          </template>
        </div>
      </section>
    </b-table>
  </div>
</template>

<script>
import ModalBox from "@/components/ModalBox";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WalletTableModel",
  components: { ModalBox },
  props: {
    dataUrl: {
      type: String,
      default: null
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isModalActive: false,
      trashObject: null,
      investiments: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
    };
  },
  computed: {
    ...mapGetters(["getInvestmentList"]),
    trashObjectName() {
      if (this.trashObject) {
        return this.trashObject.name;
      }

      return null;
    }
  },
  mounted() {
    this.GET_INVESTMENTS();
    this.investiments = this.getInvestmentList;
  },
  methods: {
    ...mapActions(["GET_INVESTMENTS"]),
    trashModal(trashObject) {
      this.trashObject = trashObject;
      this.isModalActive = true;
    },
    trashConfirm() {
      this.isModalActive = false;
      this.$buefy.snackbar.open({
        message: "Confirmed",
        queue: false
      });
    },
    trashCancel() {
      this.isModalActive = false;
    },
    sortPrecoMedio(a, b) {
      console.log("testesss", a.valor_medio, b.valor_medio);
      return a.valor_medio - b.valor_medio;
    },
    sortPrecoAtual(a, b) {
      return a.current_stock_price - b.current_stock_price;
    },
    sortRend(a, b) {
      return a.rendimento - b.rendimento;
    },
    sortTotal(a, b) {
      return a.valor_investido_atual - b.valor_investido_atual;
    }
  }
};
</script>

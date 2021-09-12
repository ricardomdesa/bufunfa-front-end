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
      :per-page="itensPerPage"
      :striped="true"
      :hoverable="true"
      @sort="onSort"
      :data="investiments"
    >
      <b-table-column label="Corretora" field="corretora" v-slot="props">
        {{ props.row.corretora }}
      </b-table-column>
      <b-table-column label="Código" field="codigo" v-slot="props">
        {{ props.row.codigo }}
      </b-table-column>
      <b-table-column
        label="Preço medio"
        field="preco_medio"
        numeric
        v-slot="props"
      >
        {{ props.row.valor_medio }}
      </b-table-column>
      <b-table-column label="Qtde" field="qtde" v-slot="props">
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
        sortable
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
    },
    itensPerPage: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      isModalActive: false,
      trashObject: null,
      investiments: [],
      isLoading: true,
      paginated: true,
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
    this.getData();
  },
  methods: {
    ...mapActions(["GET_INVESTMENTS"]),
    getData() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.GET_INVESTMENTS();
        this.investiments = this.getInvestmentList;
      }, 50);
    },
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
    onSort() {
      this.investiments
        .slice()
        .sort((a, b) => a.valor_investido_atual - b.valor_investido_atual);
    }
  }
};
</script>

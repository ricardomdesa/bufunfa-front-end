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
      default-sort="name"
      :data="stocks"
    >
      <b-table-column
        cell-class="has-no-head-mobile is-image-cell"
        v-slot="props"
      >
        <div class="image">
          <img :src="props.row.avatar" class="is-rounded" />
        </div>
      </b-table-column>
      <b-table-column label="Nome" field="nome" sortable v-slot="props">
        {{ props.row.stock_name }}
      </b-table-column>
      <b-table-column label="Código" field="codigo" sortable v-slot="props">
        {{ props.row.stock_code }}
      </b-table-column>
      <b-table-column
        label="Preço atual"
        field="current_price"
        sortable
        v-slot="props"
      >
        <strong>{{ props.row.stock_current_price }}</strong>
      </b-table-column>
      <b-table-column label="Ultima atualização" v-slot="props">
        <small
          class="has-text-grey is-abbr-like"
          :title="props.row.stock_last_update"
          >{{ props.row.stock_last_update }}</small
        >
      </b-table-column>
      <b-table-column
        custom-key="actions"
        cell-class="is-actions-cell"
        v-slot="props"
      >
        <div class="buttons is-right">
          <router-link
            :to="{ name: 'client.edit', params: { id: props.row.id } }"
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
  name: "StockTableModel",
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
      stocks: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
    };
  },
  computed: {
    ...mapGetters(["getStockList"]),
    trashObjectName() {
      if (this.trashObject) {
        return this.trashObject.name;
      }

      return null;
    }
  },
  mounted() {
    this.GET_STOCKS();
    this.stocks = this.getStockList;
  },
  methods: {
    ...mapActions(["GET_STOCKS"]),
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
    }
  }
};
</script>

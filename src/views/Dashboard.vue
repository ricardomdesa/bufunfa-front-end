<template>
  <div>
    <title-bar :title-stack="titleStack" v-show="false" />
    <section class="section is-main-section">
      <tiles>
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="piggy-bank"
          :number="getDashInfo.assets"
          prefix="R$ "
          label="Patrimonio"
        />
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="chart-line"
          :number="getDashInfo.income_perc"
          sufix=" %"
          label="Rendimento%"
          v-if="getDashInfo.income_perc > 0"
        />
        <card-widget
          class="tile is-child"
          type="is-danger"
          icon="chart-line"
          :number="getDashInfo.income_perc"
          sufix=" %"
          label="Rendimento %"
          v-else
        />
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="chart-line"
          :number="getDashInfo.income_value"
          prefix="R$ "
          label="Rendimento R$"
          v-if="getDashInfo.income_value > 0"
        />
        <card-widget
          class="tile is-child"
          type="is-danger"
          icon="chart-line"
          :number="getDashInfo.income_value"
          prefix="R$ "
          label="Rendimento R$"
          v-else
        />
      </tiles>
      <card-component
        title="Treemap"
        class="has-table has-mobile-sort-spaced"
        icon="table-large"
      >
        <Treemap />
      </card-component>
      <card-component
        title="Carteira"
        class="has-table has-mobile-sort-spaced"
        icon="table-large"
      >
        <WalletTableModel
          :data-url="` `"
          :checkable="false"
          :itensPerPage="5"
        />
      </card-component>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleBar from "@/components/TitleBar";
import CardComponent from "@/components/CardComponent";
import Tiles from "@/components/Tiles";
import CardWidget from "@/components/CardWidget";
import WalletTableModel from "../components/WalletTableModel.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import Treemap from "../components/Charts/TreeMap.vue";
export default {
  name: "Dashboard",
  components: {
    CardWidget,
    CardComponent,
    Tiles,
    TitleBar,
    WalletTableModel,
    Treemap
  },
  computed: {
    ...mapGetters(["getDashInfo"]),
    ...mapState(["userName"]),
    titleStack() {
      return ["Admin", "Dashboard"];
    }
  },
  methods: {
    ...mapActions(["GET_DASHBOARD_INFO"])
  },
  mounted() {
    this.GET_DASHBOARD_INFO();
    this.$buefy.snackbar.open({
      message: "Welcome back " + this.userName,
      queue: false
    });
  }
};
</script>

<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Tabela de Ações
      <router-link slot="right" to="/" class="button">
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Ações"
        icon="account-multiple"
      >
        <stock-table-model
          :data-url="`${$router.options.base}data-sources/stocks.json`"
          :checkable="true"
        />
      </card-component>
      <div v-if="false">
        <notification class="is-info">
          <div>
            <b-icon icon="buffer" custom-size="default" />
            <b>Empty table.</b> When there's nothing to show
          </div>
        </notification>

        <card-component class="has-table has-thead-hidden">
          <stock-table-model />
        </card-component>
      </div>
    </section>
  </div>
</template>

<script>
import Notification from "@/components/Notification";
import StockTableModel from "@/components/StockTableModel";
import CardComponent from "@/components/CardComponent";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
export default {
  name: "Tables",
  components: {
    HeroBar,
    TitleBar,
    CardComponent,
    StockTableModel,
    Notification
  },
  computed: {
    titleStack() {
      return ["Admin", "Ações"];
    }
  }
};
</script>

<template>
  <div id="app">
    <nav-bar v-if="hasToken" />
    <aside-menu :menu="menu" />
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import AsideMenu from "@/components/AsideMenu";
import FooterBar from "@/components/FooterBar";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  computed: {
    ...mapGetters(["hasToken"]),
    menu() {
      return [
        "Geral",
        [
          {
            to: "/",
            icon: "desktop-mac",
            label: "Dashboard"
          }
        ],
        "Investimentos",
        [
          {
            to: "/wallet-table",
            label: "Carteira",
            icon: "table"
          },
          {
            to: "/stock-table",
            label: "Ações Cadastradas",
            icon: "table"
          },
          {
            label: "Movimentações",
            subLabel: "Submenus Movimentacoes",
            icon: "view-list",
            menu: [
              {
                to: "/load-stocks",
                label: "Carregar ações",
                icon: "cloud-upload"
              },
              {
                to: "/load-invest",
                label: "Carregar investimentos",
                icon: "cloud-upload"
              }
            ]
          }
        ],
        "About",
        [
          {
            href: "https://github.com/ricardomdesa/bufunfa-front-end",
            label: "About",
            icon: "help-circle"
          }
        ]
      ];
    }
  },
  created() {}
};
</script>

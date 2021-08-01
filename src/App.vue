<template>
  <div id="app">
    <nav-bar v-if="hasToken" />
    <aside-menu :menu="menu" />
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
// @ is an alias to /src
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
            icon: "table",
            updateMark: true
          },
          {
            to: "/stock-table",
            label: "Ações Cadastradas",
            icon: "table",
            updateMark: true
          },
          {
            label: "Movimentações",
            subLabel: "Submenus Example",
            icon: "view-list",
            menu: [
              {
                to: "/add-invest",
                label: "Inserir investimento",
                icon: "plus"
              },
              {
                to: "/add-stock",
                label: "Inserir papel",
                icon: "plus"
              },
              {
                to: "/load-invest",
                label: "Carregar investimentos",
                icon: "cloud-upload"
              },
              {
                to: "/load-stocks",
                label: "Carregar ações",
                // icon: 'square-edit-outline'
                icon: "cloud-upload"
              }
            ]
          },
          {
            to: "/profile",
            label: "Profile",
            icon: "account-circle"
          }
        ],
        "About",
        [
          {
            href: "",
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

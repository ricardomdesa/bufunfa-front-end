<template>
  <div id="app">
    <aside-menu :menu="menu" />
    <forms />
  </div>
</template>

<script>
// @ is an alias to /src
import AsideMenu from "@/components/AsideMenu";
import Forms from "../components/forms/CadastrarForm.vue";

export default {
  name: "Signup",
  components: {
    AsideMenu,
    Forms
  },
  computed: {
    menu() {
      return [
        "Geral",
        [
          {
            to: "/login",
            icon: "desktop-mac",
            label: "Login"
          }
        ]
      ];
    }
  }
};
</script>

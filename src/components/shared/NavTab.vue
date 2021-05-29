<template>
  <div class="block pt-3">
    <div class="container">
      <ul class="tabs is-boxed is-fullwidth">
        <li
          v-for="tab in tabs"
          :key="tab.index"
          @click="changeTabIndex(tab.index)"
          :class="{ 'is-active': getCurrentTab === tab.index }"
        >
          <a :class="{'button': getCurrentTab === tab.index}">
            {{ tab.tabName }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavTab",
  props: ["tabs"],
  computed: {
    ...mapGetters(["getCurrentTab"]),
  },
  methods: {
    ...mapActions(["CHANGE_CURRENT_TAB"]),
    changeTabIndex(index) {
      this.CHANGE_CURRENT_TAB(index);
    },
  },
};
</script>

<style>

</style>

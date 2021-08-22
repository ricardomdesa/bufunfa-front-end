<template>
  <div
    class="file is-boxed has-name is-centered block is-fullwidth"
    :class="{ 'is-primary': dragoverClass }"
  >
    <label
      @dragover.prevent="dragover"
      @dragleave.prevent="dragleave"
      @drop.prevent="drop"
      class="file-label"
    >
      <input
        :disabled="fieldDisabled"
        class="file-input"
        id="file-input"
        type="file"
        name="file"
        @change="onChange"
        accept=".csv"
        required="required"
      />
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">Arraste ou clique aqui para</span>
        <span class="file-label">selecionar o arquivo</span>
      </span>
      <span class="file-name"> {{ localFile.name }} </span>
    </label>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FileInput",
  props: ["fieldDisabled"],
  data() {
    return {
      localFile: "",
      dragoverClass: false
    };
  },
  methods: {
    ...mapActions(["ADD_FILE"]),
    onChange(event) {
      this.localFile = event.target.files[0];
      this.ADD_FILE(this.localFile);
    },
    dragover(event) {
      if (!this.fieldDisabled) {
        event.preventDefault();
        this.dragoverClass = true;
      }
    },
    dragleave() {
      if (!this.fieldDisabled) {
        this.dragoverClass = false;
      }
    },
    drop(event) {
      if (!this.fieldDisabled) {
        this.dragoverClass = false;
        this.localFile = event.dataTransfer.files[0];
        const fileType = this.localFile.name.split(".").pop();
        if (!["csv"].includes(fileType)) {
          console.log(`CANNOT LOAD FILE of TYPE: ${fileType}`);
          this.localFile = "";
          this.ADD_FILE(this.localFile);
          return;
        }
        this.ADD_FILE(this.localFile);
      }
    }
  }
};
</script>
<style scoped>
div {
  -webkit-font-smoothing: antialiased !important;
  text-align: center;
  /* color: #2c3e50; */
  color: rgba(0, 0, 0, 0.87);
  padding-top: 20px;
}
</style>

<template>
  <div v-if="!isDismissed" class="notification">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <slot />
        </div>
      </div>
      <div class="level-right">
        <button type="button" class="button is-small is-white" @click="dismiss">
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Notification",
  data() {
    return {
      isDismissed: false
    };
  },
  methods: {
    ...mapActions(["CLEAR_ERROR_MESSAGES"]),
    dismiss() {
      this.isDismissed = true;
      this.CLEAR_ERROR_MESSAGES();
      this.$buefy.snackbar.open({
        message: "Dismissed",
        queue: false
      });
    }
  }
};
</script>

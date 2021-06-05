<template>
  <date-picker
    prefix-class="xmx"
    v-model="localInput"
    v-bind:value="{ localInput }"
    @pick="validateDateRangeLimit"
    @open="clearDateRangeLimit"
    @change="emitDateRangeProp"
    :default-value="startCalendarOn"
    :disabled-date="disableDateValidation"
    range
  >
  </date-picker>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "@/components/shared/input/limited-date-picker.scss";
export default {
  components: {
    DatePicker
  },
  data() {
    return {
      localInput: null,
      dateBottomLimit: null,
      dateUpperLimit: null,
      startCalendarOn: this.getCalendarStartDate()
    };
  },
  props: ["dateRange", "dateLimitInDays"],
  methods: {
    emitDateRangeProp(event) {
      let parsedDates = {
        startDate: this.dateToString(event[0]),
        endDate: this.dateToString(event[1])
      };
      this.$emit("update:dateRange", parsedDates);
    },
    disableDateValidation(date) {
      let isDateInvalid = false;
      if (this.dateBottomLimit) {
        if (this.dateToString(date) < this.dateToString(this.dateBottomLimit)) {
          isDateInvalid = true;
        }
      }
      if (this.dateUpperLimit) {
        if (this.dateToString(date) > this.dateToString(this.dateUpperLimit)) {
          isDateInvalid = true;
        }
      }
      return isDateInvalid;
    },
    clearDateRangeLimit() {
      let today = new Date();
      this.dateBottomLimit = null;
      this.dateUpperLimit = today;
    },
    validateDateRangeLimit(date) {
      let upperLimit = new Date(date);
      upperLimit.setDate(date.getDate() + this.dateLimitInDays);
      let bottomLimit = new Date(date);
      bottomLimit.setDate(date.getDate() - this.dateLimitInDays);
      this.dateBottomLimit = bottomLimit;
      if (
        this.dateToString(upperLimit) < this.dateToString(this.dateUpperLimit)
      ) {
        this.dateUpperLimit = upperLimit;
      }
    },
    getCalendarStartDate() {
      let today = new Date();
      return today.setMonth(today.getMonth() - 1);
    },
    dateToString(date) {
      let year = date.getFullYear().toString();
      let month = (date.getMonth() + 101).toString().substring(1);
      let day = (date.getDate() + 100).toString().substring(1);
      return year + "-" + month + "-" + day;
    }
  }
};
</script>

<style lang="scss" scoped></style>

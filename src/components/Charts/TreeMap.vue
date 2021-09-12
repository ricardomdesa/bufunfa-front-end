<template>
  <div id="app">
    <apexchart
      type="treemap"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Vue Chart",
  data: function() {
    return {
      chartOptions: {
        legend: {
          show: false
        },
        chart: {
          height: 350,
          type: "treemap"
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "12px"
          },
          formatter: function(text, op) {
            return [text, op.value];
          },
          offsetY: 0
        },
        plotOptions: {
          treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            colorScale: {
              ranges: [
                {
                  from: -100,
                  to: 0,
                  color: "#CD363A"
                },
                {
                  from: 0,
                  to: 100,
                  color: "#52B12C"
                }
              ]
            }
          }
        }
      },
      series: [
        {
          data: []
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getTreeMapInfo"])
  },
  methods: {
    update() {
      this.series = [{ data: this.getTreeMapInfo }];
    }
  },
  mounted() {
    this.update();
  }
};
</script>

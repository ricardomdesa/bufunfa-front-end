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
// import VueApexCharts from "vue-apexcharts";
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
          data: [
            {
              x: "TEST1",
              y: -30
            },
            {
              x: "TEST2",
              y: 14
            },
            {
              x: "TEST3",
              y: 25
            },
            {
              x: "TEST4",
              y: -3
            }
          ]
        }
      ]
    };
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      // In the same way, update the series option
      this.series = [
        {
          data: newData
        }
      ];
    }
  }
};
</script>

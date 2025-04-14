<template>
  <div>
    <h2>报表</h2>
    <div id="chart" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ReportPage',
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('chart');
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: '示例报表',
        },
        tooltip: {},
        xAxis: {
          data: ['用户1', '用户2', '用户3', '用户4', '用户5'],
        },
        yAxis: {},
        series: [
          {
            name: '访问量',
            type: 'bar',
            data: [5, 20, 36, 10, 10],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
#chart {
  margin: 20px 0;
}
</style>
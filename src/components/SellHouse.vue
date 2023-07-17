<template>
  <div class="box" ref="chart"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

const chart = ref()

onMounted(() => {
  const inputDate = '2023-03-19';
  const result = calculateTimeDifference(inputDate);
  var myChart = echarts.init(chart.value);

  const option = {
    title: {
      text: 'count down',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: result,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  myChart.setOption(option);
});

function calculateTimeDifference(inputDate) {
  // 将输入日期转换为Date对象
  const startDate = new Date(inputDate);

  // 计算两年后的日期
  const endDate = new Date(startDate);
  endDate.setFullYear(startDate.getFullYear() + 2);

  // 计算已经过去的天数
  const today = new Date();
  const daysElapsed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  // 计算剩余的天数
  const daysRemaining = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));

  // 返回结果
  return [
    { value: daysElapsed, name: 'killed' },
    { value: daysRemaining, name: 'surplus' },
  ];
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
}
</style>

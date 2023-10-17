<template>
  <div class="container">
    <el-row :gutter="16">
      <el-col :span="6" v-for="item in cardData" :key="item.iconName">
        <CountCard
          :iconName="item.iconName"
          :title="item.title"
          :rate="item.rate"
          :color="item.color"
          :count="item.count"
        ></CountCard>
      </el-col>
    </el-row>

    <el-card class="echartsCard">
      <MyEchart :options="options1" style="height: 300px"></MyEchart>
    </el-card>

    <el-row :gutter="16" class="echartsCard">
      <el-col :span="8">
        <el-card><PieChart /></el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <MyEchart :options="options3" style="height: 300px"></MyEchart>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <MyEchart :options="options4" style="height: 300px"></MyEchart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// import * as echarts from 'echarts/core'
import CountCard from './components/CountCard.vue'
// import MyEchart from '@/components/MyEcharts/MyEchart.vue'
import PieChart from './components/PieChart.vue'
import { reactive } from 'vue'

const cardData = [
  {
    title: '访问数',
    count: 134226,
    desc: 'visit numbers',
    rate: '+25.8%',
    iconName: 'ep-ice-cream',
    color: 'orange',
  },
  {
    title: '下载量',
    count: 8476,
    desc: 'download ',
    rate: '+0.8%',
    iconName: 'ep-lollipop',
    color: 'blue',
  },
  {
    title: '销售额',
    count: 134226,
    desc: 'sales s',
    rate: '+9.16%',
    iconName: 'ep-coffee-cup',
    color: 'indigo',
  },
  {
    title: '新用户数',
    count: 912,
    desc: 'new visitors',
    rate: '+5.1%',
    iconName: 'ep-watermelon',
    color: 'purple',
  },
]

const options1 = reactive({
  title: {
    text: '成交趋势',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {},
    },
  ],
})

const options3 = reactive({
  title: {
    text: '访问趋势',
    left: 'left',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
})

const options4 = reactive({
  title: {
    text: '成交占比',
    subtext: '2023.3.28',
    left: 'left',
  },
  legend: {
    top: 'bottom',
  },

  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 120],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' },
      ],
    },
  ],
})
</script>

<style lang="scss" scoped>
.container {
  .echartsCard {
    margin-top: 20px;
  }
}
</style>

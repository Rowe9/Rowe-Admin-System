<template>
  <MyEchart :options="options" style="height: 300px"></MyEchart>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import MyEchart from '@/components/MyEcharts/MyEchart.vue'

const options = reactive({
  title: {
    text: '访问来源',
    subtext: 'Fake Data',
    left: 'left',
  },
  tooltip: {
    trigger: 'item',
  },

  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
</script>

<style lang="scss"></style>

<template>
  <div class="container">
    <div class="icon">
      <iconify-icon :icon="iconName" class="iconItem"></iconify-icon>
    </div>
    <div class="text">
      <!-- <div class="count">{{ count }}</div> -->
      <GsapNumber
        :to="count"
        :from="0"
        :duration="1"
        class="count"
      ></GsapNumber>
      <div class="title">{{ title }}</div>
    </div>
    <div class="rate">
      <div>{{ rate }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GsapNumber from '@/components/gsap/GsapNumber.vue'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    iconName: string
    title: string
    desc: string
    count: number
    rate: string
    color: string
  }>(),
  {
    iconName: '',
    title: '',
    desc: '',
    count: 0,
    rate: '',
    color: '',
  },
)
</script>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
  height: 90px;
  width: auto;
  border-radius: 14px;
  border: 1px solid rgba(240, 240, 240);
  margin-top: 10px;

  .icon {
    width: 45px;
    height: 45px;
    background-color: v-bind(color);
    border-radius: 45px;
    line-height: 45px;
    text-align: center;
    .iconItem {
      color: white;
    }
  }
  .text {
    margin-left: 10px;
    .count {
      font-size: 20px;
    }
    .title {
      color: gray;
      margin-top: 5px;
    }
  }
  .rate {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: brown;
    font-size: 14px;
    margin-right: 0px;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(4px 10px 8px rgba(240, 240, 240));
    // box-shadow: 0px -10px 10px 10px gray;
    transform: scale(1.1); /* 鼠标略过时放大1.2倍 */
  }
}
</style>

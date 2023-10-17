<template>
  <div>{{ tweened.number.toFixed(0) }}</div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { reactive } from 'vue'

const props = withDefaults(
  defineProps<{
    from: number
    to: number
    duration?: number
  }>(),
  {
    from: 0,
    to: 0,
    duration: 1,
  },
)

const tweened = reactive({
  number: props.from,
})

gsap.to(tweened, {
  duration: props.duration,
  ease: 'power1.out',
  number: props.to.toFixed(0),
})
</script>

<style scoped></style>

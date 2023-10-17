<template>
  <div>{{ tweened }}</div>
</template>

<script setup>
import gasp from 'gasp'
import { reactive } from 'vue'

const props = withDefaults(
  defineProps<{
    from: number,
    to: number,
    duration?: number
  }>(),{
    from: 0,
    to: 0,
    duration?: 1
  }
  )

const tweened = reactive({
  number: props.from,
})

gasp.to('')
</script>

<style scoped></style>

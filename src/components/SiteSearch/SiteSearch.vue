<template>
  <Search
    style="width: 1.5em; height: 1.5em; margin-right: 10px"
    @click="visible = true"
  />
  <el-dialog v-model="visible" :show-close="false" width="600px">
    <template #header>
      <el-input
        size="large"
        append-to-body
        v-model="keyword"
        @input="search"
        @open="onOpen"
        @close="onClose"
        ref="inputRef"
        placeholder="请输入站点名称"
      ></el-input>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let visible = ref(false)
let keyword = ref()

function onClose() {
  keyword.value = ''
}
</script>

<style lang="scss">
.el-input {
  height: 45px;
}
</style>

import { Finished } from '@element-plus/icons-vue/dist/types'; import { Finished
} from '@element-plus/icons-vue/dist/types';

<template>
  <div>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{ currentLang }}
        <el-icon class="el-icon--right"></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="lang in langs"
            :command="lang"
            :key="lang.key"
          >
            {{ lang.title }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { langs } from '../../locales/index.ts'
import { useLocaleStore } from '@/store/locales.ts'
import { ref } from 'vue'

let localeStore = useLocaleStore()

let curLocale = localeStore.locale
let currentLang = ref(langs.find((cur) => cur.key === curLocale)?.title || '')

function handleCommand(command) {
  currentLang.value = command.title
  localeStore.setLocale(command.key)
}
</script>

<style lang="scss"></style>

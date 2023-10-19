import { defineStore } from 'pinia'
import { ref } from 'vue'
import i18n from '../locales'
import { computed } from 'vue'

export const useLocaleStore = defineStore(
  'locale',
  () => {
    const locale = ref(i18n.global.locale.value)
    const currentLocale = computed(() => {
      return locale
    })
    // 设置locale
    function setLocale(lang: any) {
      locale.value = lang
      i18n.global.locale.value = lang
    }

    return { locale, currentLocale, setLocale }
  },
  {
    persist: true,
  },
)

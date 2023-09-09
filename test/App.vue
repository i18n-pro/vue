<template>
  <div>
    <Child :with$="with$" />
    <button id="zhBtn" @click="currentSetI18n({ locale: 'zh' })">
      简体中文
    </button>
    <button id="enBtn" @click="currentSetI18n({ locale: 'en' })">
      English
    </button>
    <button id="unknownBtn" @click="currentSetI18n({ locale: undefined })">
      Unknown
    </button>
    <button id="jpBtn" @click="currentSetI18n2({
      locale: 'jp',
      langs: {
        jp: {
          你好世界: 'こんにちは、世界',
        },
      },
    })">
      日语
    </button>
    <div id="locale">
      {{ currentLocale }}
    </div>
    <div id="locale2">
      {{ currentLocale2 }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useI18n } from '../src/index'
import Child from './Child.vue'

const i18n = useI18n()
const { with$ } = defineProps({
  with$: Boolean,
})

const currentLocale = computed(() => {
  const i18nState = with$ ? i18n.$i18nState : i18n.i18nState
  return i18nState.value.locale
})

function currentSetI18n(props) {
  const func = with$ ? i18n.$setI18n : i18n.setI18n
  func(props)
}
</script>

<script>
export default {
  props: {
    with$: Boolean,
  },
  computed: {
    currentLocale2() {
      const state = this.with$ ? this.$i18nState : this.i18nState
      return state.locale
    }
  },
  methods: {
    currentSetI18n2(props) {
      const func = this.with$ ? this.$setI18n : this.setI18n
      func(props)
    }
  }
}
</script>

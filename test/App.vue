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
    <button id="jpBtn" @click="currentSetI18n({
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
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  props: {
    with$: Boolean,
  },
  computed: {
    currentLocale() {
      const state = this.with$ ? this.$i18nState : this.i18nState
      return state.locale
    }
  },
  methods: {
    currentSetI18n(props) {
      const func = this.with$ ? this.$setI18n : this.setI18n
      func(props)
    }
  }
}
</script>

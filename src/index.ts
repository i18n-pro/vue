import { I18nState, initI18n, SetI18n } from 'i18n-pro'
import type { App } from 'vue'
import { ref } from 'vue'

const installNamespace: string[] = []

export function createI18n(i18nState: I18nState) {
  return function install(app: App) {
    const { namespace } = i18nState
    if (installNamespace.includes(namespace)) return
    installNamespace.push(namespace)

    const i18n = initI18n(i18nState)
    const tRef = ref(i18n.t)

    const setI18n: SetI18n = (...args) => {
      const newState = i18n.setI18n(...args)
      tRef.value = i18n.t.bind(null)

      return newState
    }

    Object.defineProperties(app.config.globalProperties, {
      $setI18n: {
        get: () => setI18n,
      },
      $t: {
        get: () => tRef.value,
      },
    })
  }
}

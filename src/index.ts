import { I18nState, initI18n, SetI18n } from 'i18n-pro'
export { Langs, I18nState, SetI18n, Translate } from 'i18n-pro'
import type { App } from 'vue'
import { ref } from 'vue'

const installNamespace: string[] = []

export function createI18n(props: I18nState & { with$?: boolean }) {
  return function install(app: App) {
    const { with$ = true, ...i18nState } = props
    const namespace = i18nState.namespace

    if (installNamespace.includes(namespace)) return

    installNamespace.push(namespace)

    const prefix = with$ ? '$' : ''
    const i18n = initI18n(i18nState)
    const tRef = ref(i18n.t)
    const i18nStateRef = ref(i18nState)

    const setI18n: SetI18n = (...args) => {
      const newState = i18n.setI18n(...args)
      tRef.value = i18n.t.bind(null)
      i18nStateRef.value = newState

      return newState
    }

    Object.defineProperties(app.config.globalProperties, {
      [`${prefix}setI18n`]: {
        get: () => setI18n,
      },
      [`${prefix}t`]: {
        get: () => tRef.value,
      },
      [`${prefix}i18nState`]: {
        get: () => i18nStateRef.value,
      },
    })
  }
}

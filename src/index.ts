import { I18nState, initI18n, SetI18n } from 'i18n-pro'
export { Langs, I18nState, SetI18n, Translate } from 'i18n-pro'
import type { App } from 'vue'
import { ref, inject } from 'vue'

const installNamespace: string[] = []
const PROVIDER_KEY = 'i18n-pro/vue'

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

    const setI18nName = `${prefix}setI18n`
    const tName = `${prefix}t`
    const i18nStateName = `${prefix}i18nState`

    app.provide(PROVIDER_KEY, {
      [setI18nName]: setI18n,
      [tName]: tRef,
      [i18nStateName]: i18nStateRef,
    })

    Object.defineProperties(app.config.globalProperties, {
      [setI18nName]: {
        get: () => setI18n,
      },
      [tName]: {
        get: () => tRef.value,
      },
      [i18nStateName]: {
        get: () => i18nStateRef.value,
      },
    })
  }
}

export function useI18n() {
  return inject(PROVIDER_KEY)
}

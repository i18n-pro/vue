import { I18nState, initI18n, SetI18n, Translate } from 'i18n-pro'
export { Langs, I18nState, SetI18n, Translate } from 'i18n-pro'
import type { App, Ref } from 'vue'
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

    const setI18n: SetI18n = async (...args) => {
      const newState = await i18n.setI18n(...args)
      tRef.value = i18n.t.withLocale()
      i18nStateRef.value = newState

      return newState
    }

    app.provide(PROVIDER_KEY, {
      setI18n,
      t: tRef,
      i18nState: i18nStateRef,
    })

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

export function useI18n() {
  return inject(PROVIDER_KEY) as {
    t: Ref<Translate>
    setI18n: SetI18n
    i18nState: Ref<I18nState>
  }
}

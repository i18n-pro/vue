import { Break, H1, Bold, CodeBlock, List } from 'jsx-to-md'
import { getCreateI18nDesc, getI18nPro } from '../utils'

export default function Principle() {
  return (
    <>
      <H1>{t('原理')}</H1>
      {t(
        '该库是基于{0}结合{1}的{2}来实现的',
        getI18nPro('link'),
        ' `Vue` ',
        ` \`${t('全局属性、响应式机制和插件机制')}\` `,
      )}
      <Break />
      <Break />
      {t('主要由{0}部分构成', ' `1` ')}
      <List items={['U', 'createI18n']} />
      <Break />
      <Break />
      <Bold>createI18n</Bold>：{getCreateI18nDesc()}
      <Break />
      <Break />
      <Break />
      <Break />
      {t('简易示例如下')}
      <CodeBlock
        langType="typescript react"
        code={`
// App.vue
<template>
  {{ $t('hello world') }}
</template>

// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from '@i18n-pro/vue'

const i18n = createI18n({
  namespace: "i18n-example",
  locale: "en",
  langs: {
    zh: {
      'hello world': '你好世界',
    },
    ja:{
      "hello world": "こんにちは世界",
    },
  }
})

createApp(App)
.use(i18n)
.mount('#app')

`}
      />
    </>
  )
}

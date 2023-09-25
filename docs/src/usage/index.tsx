import {
  Break,
  H1,
  H2,
  CodeBlock,
  H3,
  Link,
  render,
  TableOfContents,
} from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import { Package } from '../types'
import {
  getDocHref,
  initI18n,
  getTranslationText,
  packageName,
  getI18nProDocHref,
  getCompositionAPI,
  getOptionsAPI,
} from '../utils'
import SpecialStatement from '../components/SpecialStatement'

type I18nProProps = {
  i18nProPkg: Package
}

const showPackageName = `@${packageName}`

function Install() {
  return (
    <>
      <H2>{`1. ${t('安装')}`}</H2>
      <CodeBlock
        langType="bash"
        code={`npm i ${showPackageName}
# ${t('或者')}
yarn add ${showPackageName}
# ${t('或者')}
# ${t(
          '注意：为了避免幽灵依赖导致 i18n 命令不能使用的问题，使用 pnpm 必须要安装 i18n-pro',
        )}
pnpm i i18n-pro ${showPackageName}`}
      />
    </>
  )
}

function LinkApi() {
  return (
    <>
      <H2>{`2. ${t('接入API')}`}</H2>
      <H3>{t('配置初始状态')}</H3>
      <CodeBlock
        code={`
// i18n.ts
import { createI18n } from '${showPackageName}'

export default createI18n({
  namespace: 'testNamespace',
})
`}
      />
      <H3>{t('注册插件')}</H3>
      <CodeBlock
        code={`
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

createApp(App)
.use(i18n)
.mount('#app')
`}
      />
      <H3>{t('用{0}包裹{1}', ' `$t` ', getTranslationText())}</H3>
      <CodeBlock
        code={`
// App.tsx
<template>
  <div> {{ $t('hello world') }} </div>
</template>
`}
      />
    </>
  )
}

function InitConfig(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <Break />
      <H2>{`3. ${t('初始化命令行配置文件')}`}</H2>
      <Link
        href={getI18nProDocHref(
          i18nProPkg,
          'USAGE',
          `3. ${t('初始化命令行配置文件')}`,
        )}
      >
        {t('请参考')}
      </Link>
    </>
  )
}

function ModifyConfig(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <Break />
      <H2>{`4. ${t('调整{0}配置', ' `i18nrc.js` ')}`}</H2>
      <Link
        href={getI18nProDocHref(
          i18nProPkg,
          'USAGE',
          `4. ${t('调整{0}配置', ' `i18nrc.js` ')}`,
        )}
      >
        {t('请参考')}
      </Link>
    </>
  )
}

function ExecuteTranslateCommand(props: I18nProProps) {
  return (
    <>
      <Break />
      <H2>{`5. ${t('执行翻译命令')}`}</H2>
      <Link
        href={getI18nProDocHref(
          props.i18nProPkg,
          'USAGE',
          `5. ${t('执行翻译命令')}`,
        )}
      >
        {t('请参考')}
      </Link>
    </>
  )
}

function ImportLangs() {
  return (
    <>
      <Break />
      <H2>{`6. ${t('引入语言包')}`}</H2>
      {t('语言包已经有了，就需要应用到项目中了')}
      <Break />
      <Break />
      {t(
        '如果生成的语言包是每个语言单独文件形式{0}，操作如下：',
        "（`output.langType == 'multiple'`）",
      )}
      <CodeBlock
        langType="diff"
        code={`
// i18n.ts
import { createI18n } from '${showPackageName}'
+ import zh from './i18n/zh.json'
+ import ja from './i18n/ja.json'

export default createI18n({
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs: {
+    zh,
+    ja,
+  },
})
`}
      />
      {t(
        '如果生成的语言包是聚合的形式{0}，操作如下：',
        "（`output.langType == 'single'`）",
      )}
      <CodeBlock
        langType="diff"
        code={`
// i18n.ts
import { createI18n } from '${showPackageName}'
+ import langs from './i18n/langs.json'

export default createI18n({
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs,
})
`}
      />
      {t(
        '至此，项目已经完全接入了国际化，上面{0}指定为目标语言中任意一个，在页面上就能看到翻译好的内容了。后续如果项目中有新增的{1}（需要用{2}函数包裹哟），就仅仅需要再次执行翻译命令{3}生成最新的语言包就可以了',
        ' `locale` ',
        getTranslationText(),
        ' `$t` ',
        ' `npx i18n t` ',
      )}
    </>
  )
}

function SwitchLang() {
  return (
    <>
      <Break />
      <H2>{`7. ${t('切换语言')}`}</H2>
      {t('可以通过{0}来切换语言', ' `$setI18n` ')}
      <H3>{getCompositionAPI()}</H3>
      <CodeBlock
        langType="diff"
        code={`
// App.tsx
<template>
  <div> {{ $t('hello world') }} </div>
+  <select
+    :value="$i18nState.locale"
+    @change="onSelectChange"
+  >
+    <option value="zh">简体中文</option>
+    <option value="en">English</option>
+    <option value="ja">日本語</option>
+  </select>
</template>
+
+ <script setup>
+ import { useI18n } from '${showPackageName}'
+
+ const { setI18n } = useI18n()
+
+ onSelectChange(e){
+   setI18n({
+     locale: e.target.value,
+   })
+ }
+ </script>
`}
      />
      <H3>{getOptionsAPI()}</H3>
      <CodeBlock
        langType="diff"
        code={`
// App.tsx
<template>
  <div> {{ $t('hello world') }} </div>
+  <select
+    :value="$i18nState.locale"
+    @change="onSelectChange"
+  >
+    <option value="zh">简体中文</option>
+    <option value="en">English</option>
+    <option value="ja">日本語</option>
+  </select>
</template>
+
+ <script>
+ export default {
+   methods: {
+     onSelectChange(e){
+       this.$setI18n({
+         locale: e.target.value,
+       })
+     },
+   }
+ }
+ </script>
`}
      />
    </>
  )
}

function Demo() {
  return (
    <>
      <Break />
      <H2>8. Demo</H2>
      {t(
        '真实代码示例可参考{0}文档中的{1}',
        ' `README` ',
        ` ${render(
          <Link href={getDocHref('README', 'Live Demo')}>Live Demo</Link>,
        )} `,
      )}
    </>
  )
}

export default function Usage(props) {
  initI18n(props)

  return (
    <>
      <I18nProWrapper>
        {(i18nProPkg) => (
          <>
            <H1 skip>{t('快速上手')}</H1>
            <SpecialStatement i18nProPkg={i18nProPkg} />
            <TableOfContents text={t('目录')} open={false} />
            <Install />
            <LinkApi />
            <InitConfig i18nProPkg={i18nProPkg} />
            <ModifyConfig i18nProPkg={i18nProPkg} />
            <ExecuteTranslateCommand i18nProPkg={i18nProPkg} />
            <ImportLangs />
            <SwitchLang />
            <Demo />
          </>
        )}
      </I18nProWrapper>
    </>
  )
}

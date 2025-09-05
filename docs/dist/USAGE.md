
# Quick Start

> To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br/>
> The  `i18n-pro`  related link in the current document is based on the  `3.0.0-alpha.3`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage<br/>
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[1. Install](#1-install)<br/>
  &emsp;&emsp;[2. Integrate with API](#2-integrate-with-api)<br/>
  &emsp;&emsp;&emsp;&emsp;[Configure Initial State](#configure-initial-state)<br/>
  &emsp;&emsp;&emsp;&emsp;[Register Plugin](#register-plugin)<br/>
  &emsp;&emsp;&emsp;&emsp;[Wrap text with  `$t` ](#wrap-text-with--t)<br/>
  &emsp;&emsp;[3. Initialize Command Line Configuration File](#3-initialize-command-line-configuration-file)<br/>
  &emsp;&emsp;[4. Adjust  `i18nrc.ts`  Configuration](#4-adjust--i18nrcts--configuration)<br/>
  &emsp;&emsp;[5. Execute Translation Command](#5-execute-translation-command)<br/>
  &emsp;&emsp;[6. Import Language Pack](#6-import-language-pack)<br/>
  &emsp;&emsp;[7. Switch Language](#7-switch-language)<br/>
  &emsp;&emsp;&emsp;&emsp;[ `Composition API` ](#-composition-api)<br/>
  &emsp;&emsp;&emsp;&emsp;[ `Options API` ](#-options-api)<br/>
  &emsp;&emsp;[8. Demo](#8-demo)<br/>

</details>

## 1. Install

```bash
npm i @i18n-pro/vue
# or
yarn add @i18n-pro/vue
# or
# Note: To prevent issues where the i18n command cannot be used due to ghost dependencies, it is essential to install i18n-pro when using pnpm
pnpm i i18n-pro @i18n-pro/vue
```

## 2. Integrate with API

### Configure Initial State

```js
// i18n.ts
import { createI18n } from '@i18n-pro/vue'

export default createI18n({
  namespace: 'testNamespace',
})
```

### Register Plugin

```js
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

createApp(App)
.use(i18n)
.mount('#app')
```

### Wrap text with  `$t` 

```vue
// App.tsx
<template>
  {/** text-as-key */}
  <div>{{ $t('hello world') }}</div>
  {/** custom-key */}
  <div>{{ $t.t('custom-key', 'hello world') }}</div>
</template>
```


## 3. Initialize Command Line Configuration File
[Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.3/docs/dist/USAGE.md#3-initialize-command-line-configuration-file)

## 4. Adjust  `i18nrc.ts`  Configuration
[Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.3/docs/dist/USAGE.md#4-adjust--i18nrcts--configuration)

## 5. Execute Translation Command
[Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.3/docs/dist/USAGE.md#5-execute-translation-command)

## 6. Import Language Pack
The language pack already exists, so it needs to be applied to the project
> Currently,  `3`  methods are supported for importing language pack. This documentation only covers the  `Static import`  method. For more methods, [Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.3/docs/dist/USAGE.md#6-import-language-pack)<br/>

If the generated language pack is a separate file form （`output.langType == 'multiple'`） for each language, the operation is as follows:
```diff
// i18n.ts
import { createI18n } from '@i18n-pro/vue'
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
```
If the generated language pack is in the form of aggregation （`output.langType == 'single'`）, the operation is as follows:
```diff
// i18n.ts
import { createI18n } from '@i18n-pro/vue'
+ import langs from './i18n/langs.json'

export default createI18n({
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs,
})
```
At this point, the internationalization function has been integrated. Simply set  `locale`  as the target language to display the corresponding translated content on the page. If there is a new  `text`  (requires a  `$t`  function wrap), just re-execute the  `npx i18n t`  command to generate the latest language pack to ensure that all new content is translated.

## 7. Switch Language
You can switch languages through  `$setI18n` 
###  `Composition API` 

```diff
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
+ import { useI18n } from '@i18n-pro/vue'
+
+ const { setI18n } = useI18n()
+
+ onSelectChange(e){
+   setI18n({
+     locale: e.target.value,
+   })
+ }
+ </script>
```

###  `Options API` 

```diff
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
```


## 8. Demo
Real code examples can refer to  [Live Demo](https://github.com/i18n-pro/vue/tree/v2.0.0-alpha.2#live-demo)  in the  `README`  document
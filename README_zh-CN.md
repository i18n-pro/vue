<div align="center">
  <p style="font-size: 18px;">适用于 Vue 的轻量、简单、灵活、自动翻译的国际化工具</p>

[English](https://github.com/i18n-pro/vue/tree/v0.1.0-alpha.3#readme) | 简体中文



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/vue.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/vue "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/vue "npm-download")](https://www.npmjs.com/package/@i18n-pro/vue "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/vue?style=social "github-stars")](https://github.com/i18n-pro/vue/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/vue/main "last-commit")](https://github.com/i18n-pro/vue/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/vue "github-issues")](https://github.com/i18n-pro/vue/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/vue/branch/main/graph/badge.svg?token=X2447V6A9H "codecov")](https://codecov.io/gh/i18n-pro/vue "codecov")

![demo](https://s3.bmp.ovh/imgs/2023/09/04/12f2e6bea736d1a5.gif)

</div>
<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [要求](#要求)<br/>
  [特性](#特性)<br/>
  [Live Demo](#live-demo)<br/>
  [原理](#原理)<br/>
  [License](#license)<br/>

</details>


# 愿景
为了让接入国际化成为轻松且愉快的事😄💪🏻
# 要求

>当前库仅适用于 `Vue 3.0` , 需要支持 `Vue 2.0` 的请点击 [i18n-pro/vue2](https://github.com/i18n-pro/vue2) 查看
* vue >= **3.2.25**
* i18n-pro >= **2.0.0**


# 特性

* **轻量**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/vue?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/vue "bundlesize")
* 以下特性继承于 [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 
   * **简单**
   * **灵活**
   * **自动翻译**
   * **keyless**


# Live Demo

* with$ = true
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/vue-demo/main?file=README_zh-CN.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/vue-demo/#main?file=README_zh-CN.md)
* with$ = false
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/vue-demo/simple?file=README_zh-CN.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/vue-demo/tree/simple?file=README_zh-CN.md)


# 原理
该库是基于 [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 结合 `Vue` 的 `全局属性、响应式机制和插件机制` 来实现的

主要由 `1` 部分构成
* createI18n



**createI18n**：初始化国际化状态并返回其插件函数



简易示例如下
```typescript react
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
```

# 帮助文档

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `2.0.0` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
* 当前库
   * [快速上手](https://github.com/i18n-pro/vue/blob/v0.1.0-alpha.3/docs/dist/USAGE_zh-CN.md)
   * [API](https://github.com/i18n-pro/vue/blob/v0.1.0-alpha.3/docs/dist/API_zh-CN.md)
   * [更新日志](https://github.com/i18n-pro/vue/blob/v0.1.0-alpha.3/docs/dist/CHANGELOG_zh-CN.md)
* i18n-pro
   * [命令行](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/COMMAND_LINE_zh-CN.md)
   * [匹配规则](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/MATCH_RULE_zh-CN.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/Q&A_zh-CN.md)
   * [翻译日志](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/OUTPUT_LOG_zh-CN.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu
<div align="center">
  <p style="font-size: 18px;">Lightweight, simple, flexible, automatic translation internationalization tool for Vue</p>

English | [简体中文](https://github.com/i18n-pro/vue/blob/vvdoc/README_zh-CN.md)



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/vue.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/vue "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/vue "npm-download")](https://www.npmjs.com/package/@i18n-pro/vue "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/vue?style=social "github-stars")](https://github.com/i18n-pro/vue/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/vue/main "last-commit")](https://github.com/i18n-pro/vue/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/vue "github-issues")](https://github.com/i18n-pro/vue/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/vue/branch/main/graph/badge.svg?token=GQ6S1GPFCM "codecov")](https://codecov.io/gh/i18n-pro/vue "codecov")

![demo](https://s3.bmp.ovh/imgs/2023/09/04/12f2e6bea736d1a5.gif)

</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Requirement](#requirement)<br/>
  [Features](#features)<br/>
  [Live Demo](#live-demo)<br/>
  [Principle](#principle)<br/>
  [License](#license)<br/>

</details>


# Vision
To make internationalization easy and enjoyable 😄💪🏻
# Requirement

* vue >= **3.2.25**
* i18n-pro >= **2.0.0**


# Features

* **lightweight**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/vue?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/vue "bundlesize")
* The following features are inherited from  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 
   * **simple**
   * **flexible**
   * **automatic-translation**
   * **keyless**


# Live Demo

* with$ = true
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/vue-demo/main?file=README.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/vue-demo/#main?file=README.md)
* with$ = false
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/vue-demo/simple?file=README.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/vue-demo/tree/simple?file=README.md)


# Principle
This library is implemented based on  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro")  combined with  `Vue` 's  `全局属性、响应式机制和插件机制` 

Mainly composed of  `1`  parts
* createI18n



**createI18n**：Initialize internationalization state and return its plugin function



A simple example is as follows
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

# Help Document

>To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br />The  `i18n-pro`  related link in the current document is based on the  `2.0.0`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage
* Current Library
   * [Quick Start](https://github.com/i18n-pro/vue/blob/vvdoc/docs/dist/USAGE.md)
   * [API](https://github.com/i18n-pro/vue/blob/vvdoc/docs/dist/API.md)
   * [Changelog](https://github.com/i18n-pro/vue/blob/vvdoc/docs/dist/CHANGELOG.md)
* i18n-pro
   * [Command Line](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/COMMAND_LINE.md)
   * [Matching Rules](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/MATCH_RULE.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/Q&A.md)
   * [Translation log](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/OUTPUT_LOG.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu
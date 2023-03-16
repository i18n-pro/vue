<template>
  <div>
    <Child />
    <button id="zhBtn" @click="$setI18n({ locale: 'zh' })"> 简体中文 </button>
    <button id="enBtn" @click="$setI18n({ locale: 'en' })"> English </button>
    <button id="unknownBtn" @click="$setI18n({ locale: undefined })">
      Unknown
    </button>
    <button
      id="jpBtn"
      @click="$setI18n({
          locale: 'jp',
          langs: {
            jp: {
              你好世界: 'こんにちは、世界',
            },
          },
        })"
    >
      日语
    </button>
  </div>
</template>

<script>
  import Child from './Child.vue'

  export default {
    components:{
      Child
    }
  }
</script>

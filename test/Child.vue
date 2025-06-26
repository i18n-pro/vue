<template>
  <div>
    <div id="text">
      {{ currentT('你好世界') }}
    </div>
    <div id="customKeyText">
      {{ currentTT('custom-key', '你好世界') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    with$: Boolean,
  },
  methods: {
    currentT(text) {
      const func = this.with$ ? this.$t : this.t
      return func(text)
    },
    currentTT(key,text) {
      const func = this.with$ ? this.$t.t : this.t.t
      return func(key, text)
    }
  }
}
</script>

<template>
  <div>
    <div id="text">
      {{ currentT('你好世界') }}
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
    currentT(props) {
      const func = this.with$ ? this.$t : this.t
      return func(props)
    }
  }
}
</script>

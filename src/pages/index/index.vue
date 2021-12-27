<template> 
  <div>This is a root element</div>
  <button @click="handleClick">asas</button>
  <Comp />
</template>

<script>
import Comp from '../../components/Comp.vue'

export default {
  components: { Comp },
  methods: {
    handleClick() {
      uni.reLaunch({ url: '/pages/other/index' })
    }
  },
  onLoad() {
    console.info('index: onLoad - onLoad 1')
  },
  onUnload() {
    console.info('index: onUnload - onUnload')
  }
}
</script>

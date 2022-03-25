<template>
  <button @click="jump">跳转 index</button>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const jump = () => {
      const { c } = getApp()?.globalData?.count.a.b
      c.count += 10
      c.other = []
      c.test = [12]
      getApp()!.globalData!.count.a.b.c = c
      uni.navigateBack({
        delta: 1
      })
    }

    return {
      jump
    }
  }
}

</script>

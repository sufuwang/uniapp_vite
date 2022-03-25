<template>
  <div>
    组件
    {{ data }}
  </div>
</template>
<script lang="ts">
import { onShow } from "@dcloudio/uni-app"

export default {
  props: {
    data: Object
  },
  setup(props: any) {
    onShow(() => {
      console.info('props: ', props)
    })
  }
}
</script>
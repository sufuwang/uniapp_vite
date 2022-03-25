<template>
  <div>
    组件
    {{ data }}
    {{ other }}
  </div>
</template>
<script lang="ts">
import { onShow } from "@dcloudio/uni-app"

export default {
  props: {
    data: Object,
    other: Object
  },
  setup(props: any) {
    onShow(() => {
      console.info('props: ', props)
    })
  }
}
</script>
<template>
  <view v-for="i in 100" :key="i">
    {{ data }}
  </view>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { onLoad } from '@dcloudio/uni-app';
export default {
  props: {
    data: Number,
  },
  setup(props) {
    onLoad(() => {
      console.info('组件 onLoad: ', props.data.value, Date.now())
    })
    onMounted(() => {
      console.info('组件 onMounted: ', props.data.value, Date.now())
    });
  }
}
</script>
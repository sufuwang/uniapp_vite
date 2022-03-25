<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }} {{ count }} {{ other }}</text>
    </view>
    <button @click="jump">跳转 other</button>
    <test :data="count" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
import hooks from './hooks'
import test from './comps/test.vue'

const title = ref('Hello')
const { count } = hooks()
const other = ref({ a: 0 })

const jump = () => {
  uni.navigateTo({
    url: '/pages/other/index'
  })
}

onLoad(() => {
  setInterval(() => {
    other.value.a += 1
  }, 300)
})

onShow(() => {
  console.info('count: ', count.value)
})

</script>

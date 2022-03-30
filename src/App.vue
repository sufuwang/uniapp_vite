
<style lang="less" src="./app.less"></style>
<template>
  <div class="container">
    <div class="left">
      <button @click="change(0)">options api</button>
      <button @click="change(1)">butter options api</button>
      <button @click="change(2)">composition api</button>
      <button @click="change(3)">shallow composition api</button>
      <button @click="change(4)">butter composition api</button>
      <div v-show="index === 0"><OptionsApi /></div>
      <div v-show="index === 1"><ButterOptionsApi /></div>
      <div v-show="index === 2"><CompositionApi /></div>
      <div v-show="index === 3"><ShallowCompositionApi /></div>
      <div v-show="index === 4"><ButterCompositionApi /></div>
    </div>
    <div class="right">
      <img :src="imagesSrc[index]" alt="地址错误">
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import OptionsApi from './components/OptionsApi.vue'
import ButterOptionsApi from './components/ButterOptionsApi.vue'
import CompositionApi from './components/CompositionApi.vue'
import ButterCompositionApi from './components/ButterCompositionApi.vue'
import ShallowCompositionApi from './components/ShallowCompositionApi.vue'

import optionsApiImg from './assets/optionsApi.png'
import butterOptionsApiImg from './assets/butterOptionsApi.png'
import compositionApiImg from './assets/compositionApi.png'
import shallowCompositionApiImg from './assets/shallowCompositionApi.png'
import butterCompositionApiImgImg from './assets/butterCompositionApi.png'
const imagesSrc = [optionsApiImg, butterOptionsApiImg, compositionApiImg, shallowCompositionApiImg, butterCompositionApiImgImg]


const index = ref(4)
const change = (i: number) => index.value = i

</script>
<style>
img {
  display: none;
}
</style>
<style lang="less">
.container {
  display: flex;
  padding: 80px 160px;
  button {
    margin-right: 12px;
  }
  .right {
    margin-left: 100px;
    justify-content: center;
    img {
      height: 800px;
    }
    .image {
      width: 100px;
      .top {
        height: 120px;
      }
      image {
        height: 12120px;
      }
    }
  }
}
</style>

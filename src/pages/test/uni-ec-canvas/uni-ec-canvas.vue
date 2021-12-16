<template>
  <canvas type="2d" v-if="isUseNewCanvas" class="ec-canvas" :canvas-id="canvasId" @init="init" @touchstart="touchStart"
    @touchmove="touchMove" @touchend.stop="touchEnd" @click="clickChart">
  </canvas>
  <canvas v-else class="ec-canvas" :canvas-id="canvasId" @init="init" @touchstart="touchStart" @touchmove="touchMove"
    @touchend.stop="touchEnd" @click="clickChart">
  </canvas>
</template>

<script>
</script>

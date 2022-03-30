<template>
  <div>
    <h1>CompositionApi</h1>
    <h2>{{ ds }}</h2>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'

const Obj = { a: 1 };
const ds = ref<any>(null)

onMounted(() => {
  setInterval(() => {
    Obj.a = Date.now()
  }, 200)
  ds.value = Obj
})
onUpdated(() => {
  setTimeout(() => {
    ds.value = { ...Obj }
  })
})
</script>

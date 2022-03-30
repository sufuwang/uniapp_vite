<template>
  <div>
    <h1>ShallowCompositionApi</h1>
    <h2>{{ ds }}</h2>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUpdated, ref, shallowReactive } from 'vue'

const Obj = shallowReactive({ value: { a: 1 } })
const ds = ref<any>(null)

onMounted(() => {
  setInterval(() => {
    Obj.value.a = Date.now()
  }, 200)
  ds.value = Obj
})
onUpdated(() => {
  ds.value = Obj
})

</script>

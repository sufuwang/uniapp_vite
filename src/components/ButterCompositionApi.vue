<template>
  <div>
    <h1>ButterCompositionApi</h1>
    <h2>{{ ds }}</h2>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUpdated, reactive, ref } from 'vue'

const Obj = reactive({ a: 1 })
const ds = ref<any>(null)

onMounted(() => {
  setInterval(() => {
    Obj.a = Date.now()
  }, 200)
  ds.value = Obj
})
onUpdated(() => {
  ds.value = Obj
})

</script>

<template>
  <Comp :data="data" />
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app';
import Comp from './comp.vue'

export default {
  components: { Comp },
  setup() {
    const data = ref(1);

    onLoad(() => {
      data.value = 2
      console.info('页面 onLoad: ', data.value, Date.now())
    })
    onMounted(() => {
      console.info('页面 onMounted: ', data.value, Date.now())
    });

    return { data }
  },
};
</script>

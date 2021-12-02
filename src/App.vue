<style lang="less" src="@styles/a.less"></style>
<style lang="less" src="@styles/b.less"></style>
<template>
  <div>
    <A />
    <B />
  </div>
</template>
<script>
import A from "./pages/a.vue";
import B from "./pages/b.vue";

export default {
  components: {
    A,
    B,
  },
};
</script>
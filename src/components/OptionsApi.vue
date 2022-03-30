<template>
  <div>
    <h1>OptionsApi</h1>
    <h2>{{ ds }}</h2>
  </div>
</template>

<script>
const Obj = { a: 1 };
export default {
  data() {
    return {
      ds: null,
    };
  },
  mounted() {
    setInterval(() => {
      Obj.a = Date.now();
    }, 500);
    this.ds = Obj;
  },
  updated() {
    this.ds = Obj;
  },
};
</script>












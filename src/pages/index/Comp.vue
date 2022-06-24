<template>
  <view class="container page-more-shots">
    {{ list }}
  </view>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  watch: {
    cur() {
      this.current = this.cur;
    },
    current() {
      this.showLazyImages(this.current);
    },
    len() {
      this.showLazyImages(this.current);
    },
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    cur: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    len() {
      return this.list.length;
    },
  },
  created() {
    this.current = this.cur;
    this.current || this.showLazyImages();
  },
  methods: {
    showLazyImages() {
      this.len &&
        this.$emit('setlazyurl', [
          this.current,
          (this.current + this.len - 1) % this.len,
          (this.current + 1) % this.len,
        ]);
    },
  },
};
</script>

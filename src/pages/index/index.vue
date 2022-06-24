<template>
  <Album :list="list" :cur="cur" @setlazyurl="setLazyUrl" />
</template>
<script>
import Album from './Comp.vue';
export default {
  name: '',
  data() {
    return {
      cur: 0,
      list: [],
      dateCur: [],
      typeCur: [],
      // showCamera: false,
    };
  },
  onLoad() {
    this.list = this.list = [
      {
        "editable": 1,
        "insertTime": "2022-06-23",
        "primaryType": "检12",
        "reportId": "rrfb546b721be72bcdde68f",
        "reportTime": "2022-06-23",
        "type": "血常规报告",
        "url": "https://ehcaUKxFxcrr452c52f202243b&st=1656061153&ver=v2"
      },
      {
        "editable": 0,
        "insertTime": "2022-06-20",
        "primaryType": "",
        "reportId": "rre2a0c23633dc",
        "reportTime": "",
        "type": "",
        "url": "https://eh=1656061153&ver=v2"
      }
    ];
  },
  components: {
    Album,
  },
  methods: {
    setLazyUrl(currentList) {
      console.error('setLazyUrl');
      for (const k in [0, 1]) {
        this.$set(this.list[k], 'lazyUrl', this.list[k].url);
      }
    },
  },
};
</script>

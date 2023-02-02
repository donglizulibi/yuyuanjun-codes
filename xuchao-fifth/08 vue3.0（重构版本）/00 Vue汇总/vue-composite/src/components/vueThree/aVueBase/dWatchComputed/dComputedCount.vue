<template>
  <div>
    <h4>computed相关</h4>
    <h5>computed只有在其内部依赖了响应式数据的情况才会自动更新</h5>
    <div>{{ date }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.interval = setInterval(() => {
      let time = new Date();
      this.timer = time.toTimeString();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  data() {
    return {
      timer: "",
      interval: "",
    };
  },
  computed: {
    date() {
      return this.timer;
    },
  },
};
</script>

<style lang="scss" scoped></style>

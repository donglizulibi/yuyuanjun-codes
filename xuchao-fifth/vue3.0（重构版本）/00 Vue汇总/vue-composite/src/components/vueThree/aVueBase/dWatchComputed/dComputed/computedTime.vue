<template>
  <div>
    <!-- this.time会不断变化 -->
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

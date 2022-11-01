<template>
  <div ref="el">qwer</div>
  <div ref="hdcms">wer</div>
</template>

<script>
export default {
  data() {
    return {
      hd: "houdunren",
    };
  },
  methods: {
    onClick() {},
  },
  beforeCreate() {
    // 实例对象创建前，数据没有，方法没有，页面没有
    console.log("beforeCreate:", this.hd);
    console.log("beforeCreate:", this.onClick);
    console.log(this.$refs);
  },
  created() {
    // 实例对象创建后，页面挂载前，数据有，方法有，页面没有
    console.log("created:", this.hd);
    console.log("beforeCreate:", this.onClick);
    console.log(this.$refs);
  },
  mounted() {
    // 页面挂载后，页面有
    console.log(this.$refs);
  },
};
</script>

<style lang="scss" scoped></style>

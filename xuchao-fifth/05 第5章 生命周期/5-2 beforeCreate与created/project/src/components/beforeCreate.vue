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
    console.log("beforeCreate:", this.hd);
    console.log("beforeCreate:", this.onClick);
    console.log(this.$refs);
  },
  created() {
    console.log("created:", this.hd);
    console.log("beforeCreate:", this.onClick);
    console.log(this.$refs);
  },
  mounted() {
    console.log(this.$refs);
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <div>这里是第一个组件</div>
    <p></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "这里是第一个组件的数据",
    };
  },
  methods: {
    show() {
      return "调用第一个组件的show方法";
    },
  },
};
</script>

<style lang="scss" scoped></style>

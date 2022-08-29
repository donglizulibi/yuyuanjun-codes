<template>
  <div>
    <div>CardAreaClick的基本内容</div>
    <div><slot /></div>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      console.log("这里是子组件的show方法");
    },
  },
};
</script>

<style lang="scss" scoped></style>

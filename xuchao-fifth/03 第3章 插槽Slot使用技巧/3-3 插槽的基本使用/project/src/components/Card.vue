<template>
  <div>
    <div>Card组件的基本内容</div>
    <div class="hd" @click="show(content)"><slot /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "子组件的数据",
    };
  },
  methods: {
    show(content) {
      console.log(content);
      console.log("子组件的方法show");
    },
  },
};
</script>

<style lang="scss" scoped>
.hd {
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  background-color: aqua;
  opacity: 0.3;
}
</style>

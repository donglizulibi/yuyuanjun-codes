<template>
  <div>
    <div>CardAreaPass的基本内容</div>
    <div @click="show(content)" class="hd"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "当父组件不传递值时的默认内容",
    },
  },
  methods: {
    show(content) {
      console.log("子组件的方法调用" + content);
    },
  },
};
</script>

<style lang="scss" scoped>
.hd {
  background-color: aqua;
  opacity: 0.6;
}
</style>

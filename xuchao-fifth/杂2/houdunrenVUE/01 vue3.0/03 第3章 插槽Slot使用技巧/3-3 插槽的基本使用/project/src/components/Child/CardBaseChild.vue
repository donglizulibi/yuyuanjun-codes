<template>
  <div>
    <div class="hd" @click="show(title)">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "子组件的数据",
    };
  },
  methods: {
    show(title) {
      console.log(title);
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
  border-radius: 10px;
}
</style>

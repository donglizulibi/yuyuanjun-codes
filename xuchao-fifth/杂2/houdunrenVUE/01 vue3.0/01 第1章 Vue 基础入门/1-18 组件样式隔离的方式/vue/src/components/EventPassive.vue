<template>
  <div>
    <!-- 滚动条 -->
    <div class="d1" @scroll="d1">
      <div class="d2"></div>
    </div>

    <!-- a标签 -->
    <div class="a">
      <a href="http://www.houdunren.com" @click.passive="hd">houdunren</a>
      <a href="http://www.houdunren.com" @click="hd">houdunren</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    d1() {
      console.log("d1");
    },
    hd(event) {
      event.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
.d1 {
  margin: auto;
  height: 200px;
  width: 300px;
  border: 5px solid red;
  overflow-y: scroll;
}

.d2 {
  height: 1000px;
  background-color: blue;
}

a {
  text-decoration: none;
  border: 1px solid aquamarine;
  margin: 10px;
}
</style>

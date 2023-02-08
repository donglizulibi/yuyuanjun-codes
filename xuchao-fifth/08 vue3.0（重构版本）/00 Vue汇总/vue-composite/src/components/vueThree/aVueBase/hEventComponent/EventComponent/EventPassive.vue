<template>
  <div>
    <!-- 滚动条 -->
    <h6>v-on:scroll 滚动触发</h6>
    <div class="d1" @scroll="d1">
      <div class="d2"></div>
    </div>
    <div>滚动触发了{{ d1Count }}次</div>

    <!-- a标签 -->
    <br />
    <h6>添加passive使得preventDefault无效</h6>
    <div>以下两个链接的点击事件都加了preventDefault</div>
    <div class="a">
      <a href="http://www.baidu.com" @click.passive="hd">加了passive修饰符</a>
      <a href="http://www.baidu.com" @click="hd">没加</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      d1Count: 0,
    };
  },
  methods: {
    d1() {
      this.d1Count++;
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

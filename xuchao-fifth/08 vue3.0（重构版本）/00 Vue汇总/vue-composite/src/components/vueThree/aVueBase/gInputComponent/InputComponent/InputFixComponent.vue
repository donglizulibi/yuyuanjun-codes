<template>
  <div>
    <h5>lazy修饰符（在表单失去焦点的时候才显示双向绑定的效果）</h5>
    <input type="text" v-model.lazy="hd" />
    <span>{{ hd }}</span>
    <hr />
    <h5>number修饰符（自动将用户的输入值转为数值类型）（自动计算加法）</h5>
    <input type="text" v-model.number="num" />
    <span>{{ num + 100 }}</span>
    <hr />
    <h5>trim修饰符（去除首尾空白）</h5>
    <input type="text" v-model.trim="hdcms" />
    <span>{{ hdcms }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hd: "",
      num: 1,
      hdcms: "asd",
    };
  },
  watch: {
    hd() {
      // 这个数据只有在表单失去焦点的时候才会响应
      console.log(1);
    },
    hdcms() {
      console.log(this.hdcms.length);
    },
  },
};
</script>

<style lang="scss" scoped></style>

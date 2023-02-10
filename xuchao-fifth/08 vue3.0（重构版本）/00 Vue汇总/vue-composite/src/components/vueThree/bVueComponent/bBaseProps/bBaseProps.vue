<template>
  <div class="main">
    <p>
      使用props实现父组件传值到子组件的方式
      <button v-on:click="state = !state">{{ state ? "收起" : "展开" }}</button>
      <br />
    </p>

    <p v-if="state">
      1 在子组件定义props属性名，属性值是一个数组<br />
      &nbsp;&nbsp; 在数组中放一个字符串作为一个传递出来的变量<br /><br />
      2 在父组件template模板里需要传值的地方<br />
      &nbsp;&nbsp; 使用v-on绑定这个子组件传递出来的变量<br /><br />
      3 把父组件的数据传到绑定的变量的值中去
    </p>

    <div v-for="data of db" :key="data.id">
      <todo :dataPass="data"></todo>
    </div>

    <hd :mid="middle"></hd>
  </div>
</template>

<script>
import hd from "./bBasePropsComponents/hd.vue";
import Todo from "./bBasePropsComponents/Todo.vue";
export default {
  components: {
    hd,
    Todo,
  },
  methods: {
    show() {},
  },
  data() {
    return {
      state: false,
      db: [
        { id: 1, title: "我好饿" },
        { id: 2, title: "我好困" },
        { id: 3, title: "我要吃饭" },
        { id: 4, title: "我要睡觉" },
      ],
      middle: "父传子的数据",
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-left: 10px;
  border: 1px solid black;
}
.main {
  margin: auto;
  width: 600px;
  p {
    width: 400px;
    margin: auto;
    text-align: left;
    padding-left: 50px;
  }
}
</style>

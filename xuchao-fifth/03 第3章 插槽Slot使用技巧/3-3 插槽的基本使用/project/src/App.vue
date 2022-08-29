<script>
import Card from "./components/Card.vue";
import CardAreaClick from "./components/CardAreaClick.vue";
import CardAreaData from "./components/CardAreaData.vue";
import CardAreaPass from "./components/CardAreaPass.vue";
import HdButton from "./components/Button.vue";
import HdButtonBack from "./components/ButtonBack.vue";
export default {
  components: {
    Card,
    HdButton,
    HdButtonBack,
    CardAreaClick,
    CardAreaData,
    CardAreaPass,
  },
  data() {
    return {
      str: "houdunren",
      content: "父组件的content数据",
    };
  },
  methods: {
    show() {
      console.log("父组件的show方法");
    },
    post(content) {
      console.log(content);
    },
  },
};
</script>
<template>
  <div>
    <h3>插槽的基本使用</h3>
    <card>
      {{ str }}
    </card>
    <card>
      <input type="text" value="houdunren" />
    </card>
    <card>
      <hd-button />
    </card>
  </div>
  <div>
    <h3>插槽的作用域</h3>
    <card-area-click>
      <button @click="show">插槽点击事件</button>
    </card-area-click>
    <card-area-data>
      <button @click="post(content)">插槽点击数据传递</button>
    </card-area-data>
    <card-area-pass :content="content">
      <!-- 把下面的打开，调用的就是props属性里面定义的默认内容 -->
      <!-- <card-area-pass> -->
      <div>点击使子组件的方法使用父组件数据</div>
    </card-area-pass>
    <h3>插槽的后备内容</h3>
    <hd-button-back>父组件插入的内容</hd-button-back>
  </div>
</template>

<style scoped>
button {
  border: 2px solid black;
}
</style>

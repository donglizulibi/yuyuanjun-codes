<template>
  <h4>子父组件组件数据变量同名，插槽会使用父组件的数据</h4>
  <card-area-data-child>
    {{ content }}
  </card-area-data-child>

  <br />

  <h4>子父组件组件方法同名，插槽会使用父组件的方法</h4>
  <card-area-click-child>
    <hd-button @click="show">点击显示数据</hd-button>
  </card-area-click-child>

  <br />

  <h4>父组件的数据传到子组件使用</h4>
  <h5>就是把数据通过props传到子组件，再称为实参传进子组件的方法中</h5>
  <card-area-props-child :content="content">
    <hd-button>插槽</hd-button>
  </card-area-props-child>
</template>

<script>
import CardAreaDataChild from "./bCardAreaChild/CardAreaDataChild";
import CardAreaClickChild from "./bCardAreaChild/CardAreaClickChild.vue";
import CardAreaPropsChild from "./bCardAreaChild/CardAreaPropsChild";
import HdButton from "./Tool/Button.vue";
export default {
  components: {
    CardAreaDataChild,
    CardAreaClickChild,
    CardAreaPropsChild,
    HdButton,
  },
  data() {
    return {
      content: "父组件CardArea的content数据",
    };
  },
  methods: {
    show() {
      alert("父组件的show方法");
    },
  },
};
</script>

<style lang="scss" scoped></style>

<script>
import HdButton from "./components/Button.vue";
import HdButtonStyle from "./components/ButtonStyle.vue";
import HdButtonDisabled from "./components/ButtonDisabled.vue";
import HdButtonIcon from "./components/ButtonIcon.vue";
import HdButtonSingleStr from "./components/ButtonSingleStr.vue";
import HdButtonSingleObj from "./components/ButtonSingleObj.vue";
import HdButtonSingleNorm from "./components/ButtonSingleNorm.vue";
import HdButtonSingleWatch from "./components/ButtonSingleWatch.vue";
import HdButtonSingleNonProps from "./components/ButtonSingleNonProps.vue";
import HdButtonSingleEvent from "./components/ButtonSingleEvent.vue";
export default {
  components: {
    HdButton,
    HdButtonStyle,
    HdButtonDisabled,
    HdButtonIcon,
    HdButtonSingleStr,
    HdButtonSingleObj,
    HdButtonSingleNorm,
    HdButtonSingleWatch,
    HdButtonSingleNonProps,
    HdButtonSingleEvent,
  },
  data() {
    return {
      content: "自定义按钮内容",
      allContents: { content: "返回", buttonType: "danger" },
      btContentStr: "我好困",
      btContentObj: { text: "我好困" },
      btContentWatch: "houdunren",
    };
  },
  methods: {
    btClick() {
      alert("父组件的houdunren方法");
    },
  },
};
</script>

<template>
  <h3>props按钮组件</h3>
  <!-- 这样传递字符串会有警告 -->
  <!-- <hd-button :content="{ a: 1234 }"></hd-button> -->
  <hd-button :content="content"></hd-button>
  <!-- 如果是直接写数据，那就不用动态绑定 -->
  <hd-button content="保存提交"></hd-button>
  <!-- 不传递content的值就会显示默认值 -->
  <hd-button></hd-button>
  <hr />
  <h3>自定义按钮样式</h3>
  <!-- 按钮类型默认 按钮内容默认 -->
  <hd-button-style></hd-button-style>
  <!-- 自定义类型 -->
  <hd-button-style content="删除" buttonType="danger"></hd-button-style>
  <hd-button-style content="返回" buttonType="danger"></hd-button-style>
  <hd-button-style
    content="提交成功"
    buttonType="success"
    style="margin-top: 100px; border: 5px solid black"
  ></hd-button-style>

  <hr />
  <h3>禁用按钮</h3>
  <!-- <hd-button-disabled></hd-button-disabled> -->
  <hd-button-disabled content="禁止编辑" :disabled="true"></hd-button-disabled>
  <!-- 下面这种传递值的方法就会报错 -->
  <!-- <hd-button-disabled content="禁止编辑" buttonType="abc"></hd-button-disabled> -->
  <hr />
  <h3>批量绑定属性</h3>
  <hd-button-icon v-bind="allContents"></hd-button-icon>
  <hd-button-icon content="返回" buttonType="danger" hd-tip="提示："></hd-button-icon>
  <hr />
  <h3>required验证</h3>
  <hd-button-icon content="返回" buttonType="danger" hd-tip="提示："></hd-button-icon>
  <!-- 下面如果不填content属性会报错 -->
  <!-- <hd-button-icon buttonType="danger" hd-tip="提示："></hd-button-icon> -->
  <hr />

  <!-- 单项数据流 -->
  <h3>单向数据流</h3>
  <h5>值类型数据</h5>
  <hd-button-single-str
    :contentStr="btContentStr"
    buttonType="success"
  ></hd-button-single-str>
  <button @click="btContentStr = 'houdunren'">父组件</button>
  <span>{{ btContentStr }}</span>

  <h5>引用类型数据</h5>
  <!-- 这里btContentObj虽然是一个引用类型，但是传值还是整个传过去 -->
  <!-- 不要只传btContentObj.text -->
  <hd-button-single-obj
    :contentObj="btContentObj"
    buttonType="success"
  ></hd-button-single-obj>
  <button @click="btContentObj.text = 'houdunren'">父组件</button>
  <span>{{ btContentObj.text }}</span>
  <hr />

  <!-- 在子组件中把props数据变成响应式数据的规范 -->
  <h3>在子组件中把props数据变成响应式数据的规范</h3>
  <hd-button-single-norm
    contentStr="houdunren"
    buttonType="success"
  ></hd-button-single-norm>
  <hr />

  <!-- 使用watch监听props数据的变化 -->
  <h3>使用watch监听props数据的变化</h3>
  <hd-button-single-watch
    buttonType="success"
    :contentStr="btContentWatch"
  ></hd-button-single-watch>
  <button @click="btContentWatch = '我好饿'">父组件</button>
  <hr />

  <!-- 非props属性的传递 -->
  <h3>非props属性的传递</h3>
  <hd-button-single-non-props
    buttonType="success"
    contentStr="houdunren"
    id="hdcms"
    class="hd"
  ></hd-button-single-non-props>
  <hr />

  <!-- 组件间的事件传递 -->
  <h3>组件间的事件传递</h3>
  <hd-button-single-event
    buttonType="success"
    contentStr="houdunren"
    @click="btClick"
  ></hd-button-single-event>
  <!-- :click="btClick" -->
</template>

<style scoped></style>

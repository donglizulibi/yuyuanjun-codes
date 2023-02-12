<template>
  <div>
    <h4>基本按钮组件</h4>
    <div>使用对象的方式规定props属性</div>
    <h5>默认样式</h5>
    <a-base-button></a-base-button>
    <h5>自定义样式</h5>
    <a-base-button :content="cont" :arr="array"></a-base-button>

    <h4>自定义组件样式</h4>
    <h5>父组件向子组件的props传递两个参数，一个控制按钮的类别，一个控制按钮内部的文字</h5>
    <b-button-style></b-button-style>
    <b-button-style content="删除" buttonType="danger"></b-button-style>
    <b-button-style content="返回" buttonType="success"></b-button-style>
    <h5>父组件自定义的样式通过attrs传递到子组件中</h5>
    <b-button-style
      content="提交成功"
      buttonType="success"
      style="border: 5px solid black"
    ></b-button-style>

    <h4>禁用按钮</h4>
    <h5>
      添加第三个props属性disabled，在按钮组件中的样式靠后，一旦调用可以覆盖前面的样式
    </h5>
    <h5>在子组件的props属性中使用validator函数验证父组件传递过来的数据是否符合要求</h5>
    <c-button-disabled
      buttonType="danger"
      disabled="disabled"
      content="禁用"
    ></c-button-disabled>

    <h4>批量设置props</h4>
    <h5>子组件的props属性中去掉default属性，设置required属性，表示此props参数必须传递</h5>
    <h5>使用v-bind批量设置props属性，将所有配置放进一个对象中，v-bind不可以省略</h5>
    <d-button-icon v-bind="iconContent"></d-button-icon>
    <!-- iconContent = {"content": "返回", buttonType: "danger" } -->
    <h5>标题可以自定义</h5>
    <d-button-icon content="返回" buttonType="danger" hd-tip="提示："></d-button-icon>

    <h4>单项数据流</h4>
    <e-single-data-button></e-single-data-button>

    <h4>props传递数据的标准写法</h4>
    <f-button-single-norm
      buttonType="success"
      contentStr="标准引用"
    ></f-button-single-norm>

    <h4>使用watch监听props数据的变化</h4>
    <g-button-single-watch></g-button-single-watch>
  </div>
</template>

<script>
import aBaseButton from "./AllButtonComponents/aBaseButton.vue";
import bButtonStyle from "./AllButtonComponents/bButtonStyle.vue";
import cButtonDisabled from "./AllButtonComponents/cButtonDisabled.vue";
import dButtonIcon from "./AllButtonComponents/dButtonIcon.vue";
import eSingleDataButton from "./AllButtonComponents/eSingleDataButton.vue";
import fButtonSingleNorm from "./AllButtonComponents/fButtonSingleNorm.vue";
import gButtonSingleWatch from "./AllButtonComponents/gButtonSingleWatch.vue";

export default {
  components: {
    aBaseButton,
    bButtonStyle,
    cButtonDisabled,
    dButtonIcon,
    eSingleDataButton,
    fButtonSingleNorm,
    gButtonSingleWatch,
  },
  data() {
    return {
      cont: "自定义按钮",
      array: [2, 3, 4],
      iconContent: { content: "返回", buttonType: "danger" },
    };
  },
};
</script>

<style lang="scss" scoped></style>

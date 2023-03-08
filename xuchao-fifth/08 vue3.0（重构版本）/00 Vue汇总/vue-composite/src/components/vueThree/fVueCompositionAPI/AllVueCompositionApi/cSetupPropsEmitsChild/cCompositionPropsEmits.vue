<template>
  <div>
    <h5>计数器的初始值由父组件的数据传入</h5>
    <h5>子组件的最新计数会实时传递回父组件</h5>
    <c-composition-props-emits-child :init="4" @change="changeHandle" />
    父组件的区域：{{ num }}
    <h4>总结</h4>
    <h4>setup中的props用法</h4>
    <h5>1 父组件的部分不变，子组件中也是需要在props的api定义属性名称</h5>
    <h5>
      2
      设置子组件setup中的第一个形参（名字任意，一般是props），在这个参数中就可以接到父组件的数据
    </h5>
    <h4>setup中的emits用法</h4>
    <h5>1 父组件中绑定子组件标签上自定义事件的事件方法也可以在setup中定义</h5>
    <h5>2 和vue2一样，子组件也需要在emits的Api中注册自定义事件的名称</h5>
    <h5>3 设置子组件setup中的第二个形参，获取这个形参对象的emit方法</h5>
    <h5>
      4
      在需要的地方调用emit方法，这个方法的第一个参数填入自定义事件名称，第二个参数填入要传到父组件的数据
    </h5>
    <br />
  </div>
</template>

<script>
import cCompositionPropsEmitsChild from "./child/cCompositionPropsEmitsChild.vue";
import { ref } from "vue";
export default {
  components: {
    cCompositionPropsEmitsChild,
  },
  setup() {
    let num = ref(0);
    const changeHandle = (v) => {
      num.value = v;
    };
    return { num, changeHandle };
  },
};
</script>

<style lang="scss" scoped></style>

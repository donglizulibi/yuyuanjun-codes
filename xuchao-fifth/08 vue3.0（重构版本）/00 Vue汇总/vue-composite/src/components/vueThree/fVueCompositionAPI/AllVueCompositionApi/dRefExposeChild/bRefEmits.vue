<template>
  <div>
    <b-ref-emits-child
      :init="4"
      ref="countComponent"
      v-on:change="changeHandle"
    ></b-ref-emits-child>
    父组件区域：{{ changeHandle() }}
    <h5>
      1 这个方法也是在子组件里会使数据变化的操作同步触发自定义事件，但是不传递子组件的数据
    </h5>
    <h5>2 在父组件对绑定自定义事件的事件方法中返回子组件当前的数据</h5>
    <h5>3 而这个数据是通过ref直接在子组件获取，然后在模板中直接调用绑定事件方法</h5>
    <h5>
      4
      所以子组件每次改变数据都会触发自定义事件，而与此同时父组件模板中的绑定事件方法也不断执行，来显示最新的子组件数据
    </h5>
    <h5>
      5
      在通过ref调用子组件数据的时候，由于可能出现子组件还没有开始创建，父组件就已经先运行了绑定事件方法情况
    </h5>
    <h5>
      6 这个情况下无法返回有意义的数据，所以需要先加上一个判断来确定子组件数据是存在的
    </h5>
  </div>
</template>

<script>
import { ref } from "vue";
import bRefEmitsChild from "./child/bRefEmitsChild.vue";
export default {
  components: {
    bRefEmitsChild,
  },
  setup() {
    const countComponent = ref();
    const changeHandle = () => {
      if (countComponent.value) {
        console.log(countComponent.value);
        return countComponent.value.num;
      }
    };
    // const changeHandle = () => countComponent.value?.num;

    return { changeHandle, countComponent };
  },
};
</script>

<style lang="scss" scoped></style>

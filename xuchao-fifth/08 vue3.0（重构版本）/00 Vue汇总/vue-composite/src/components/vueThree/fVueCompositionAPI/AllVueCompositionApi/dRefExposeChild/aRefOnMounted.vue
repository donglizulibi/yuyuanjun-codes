<template>
  <div>
    <a-ref-on-mounted-child ref="childComponent"></a-ref-on-mounted-child>
    <br />
    <button v-on:click="getData">父组件调用子组件的数据</button>
    <div v-if="count">{{ count }}</div>
    <h5>1 在setup中调用组件的ref也要从vue中引入ref方法</h5>
    <h5>2 调用ref方法的时候不用填参数，将变量名设置成组件中ref名一样</h5>
    <h5>3 如果要使ref子组件实例有意义，需要等父组件的模板渲染完成</h5>
    <h5>
      4
      因此需要调用onMounted（在setup中使用的mounted生命周期函数），在回调函数中获得ref组件实例和其中的数据
    </h5>
    <h5>5 这个方法无法将数据显示在页面上</h5>
  </div>
</template>

<script>
import aRefOnMountedChild from "./child/aRefOnMountedChild.vue";
import { ref, onMounted } from "vue";

export default {
  components: {
    aRefOnMountedChild,
  },
  setup() {
    const childComponent = ref();
    let count = ref("");

    console.log(childComponent);
    console.log(childComponent.value);

    onMounted(() => {
      console.log(childComponent);
      console.log(childComponent.value);
      count = childComponent.value.data;
      console.log(count);
    });

    let getData = () => {
      alert(count);
    };

    return { childComponent, count, getData };
  },
};
</script>

<style lang="scss" scoped></style>

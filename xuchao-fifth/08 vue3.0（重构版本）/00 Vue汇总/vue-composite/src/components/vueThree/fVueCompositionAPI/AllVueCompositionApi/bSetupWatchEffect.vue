<template>
  <div>
    <h4>修改上个例子的计数器，添加计数范围为0到5</h4>
    <count />
    <show-change :changeData="db"></show-change>
    <h4>总结</h4>
    <h4>watch的用法</h4>
    <h5>1 option Api中的watch是一个对象，而composition Api的watch是一个函数</h5>
    <h5>
      2 composition Api的watch的第一个参数是需要监测的数据，第二个参数是一个回调函数
    </h5>
    <h5>
      3 这个回调函数也有两个参数，第一个参数是这个数据当下的值，第二个参数是变化前的值
    </h5>
    <h5>4 对监测数据的反映的操作写在这个回调函数的函数体中</h5>

    <h4>watchEffect的用法</h4>
    <h5>1 watchEffect的参数也是一个回调函数，这个回调函数没有参数</h5>
    <h5>2 直接在回调函数的函数体中编写监测数据的操作</h5>
    <h5>3 watchEffect的返回值是一个函数体，调用这个函数体可以使监测失效</h5>
    <h5>4 watchEffect不需要等数据变化，在组件初始化的时候就会执行</h5>
    <br />
  </div>
</template>

<script>
import count from "./bSetupWatchEffectChild/bSetupWatchEffectChild.vue";
import db from "./bSetupWatchEffectChild/data";
import ShowChange from "./Tool/ShowChange.vue";
export default {
  components: {
    count,
    ShowChange,
  },
  data() {
    return {
      db,
    };
  },
};
</script>

<style lang="scss" scoped></style>

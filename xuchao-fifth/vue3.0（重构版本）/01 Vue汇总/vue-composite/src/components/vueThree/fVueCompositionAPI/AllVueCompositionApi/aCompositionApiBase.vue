<template>
  <div>
    <h4>vue3的composition Api（组合api）对应的是vue2的option api（选项api）</h4>
    <h5>以一个计数的例子来观察两种编码方式的区别</h5>
    <count />

    <show-change :change-data="database"></show-change>
    <h4>总结</h4>
    <h5>1 composition Api是把方法、数据等都放在一个名为setup的api中</h5>
    <h5>2 composition Api可以使用传统的let方法定义各种变量</h5>
    <h5>
      3 composition Api定义的变量是基本类型数据，需要引入ref方法将数据变成对象以保证响应式
    </h5>
    <h5>4 composition Api的方法中如果要修改数据，需要改数据的value属性</h5>
    <h5>5 composition Api内所有变量需要放在一个对象里返回出来</h5>
    <h5>
      6 两种编码方式的模板相同，使用composition Api在模板显示数据也不必调用value属性
    </h5>
    <br />
    <br />
  </div>
</template>

<script>
import count from "./aCompositionApiBaseChild/count.vue";
import database from "./aCompositionApiBaseChild/data";
import ShowChange from "./Tool/ShowChange.vue";
export default {
  components: {
    count,
    ShowChange,
  },
  data() {
    return {
      database,
      //   compositionData: database.compositionData,
      //   optionData: database.optionData,
    };
  },
};
</script>

<style lang="scss" scoped>
.showChange {
  margin: auto;
  width: 600px;
  //   border: 1px solid black;
  display: flex;
  justify-content: space-around;
  p {
    padding-top: 20%;
    font-weight: bolder;
  }
  pre {
    text-align: left;
    font-weight: bold;
  }
}
</style>

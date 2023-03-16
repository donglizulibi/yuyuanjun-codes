<template>
  <div>
    姓名：{{ name }}
    <br />
    年龄：{{ age }}
    <br />
    性别: {{ gender }}
    <br />
    <button v-on:click="change">改变数据</button>
    <h4>总结</h4>
    <h5>1 虽然在原生js中对象无法使用展开语法，但是在setup里可以在return中使用</h5>
    <h5>2 如果一个对象有多个属性需要在页面中展示，可以在return中批量返回</h5>
    <h5>
      3
      而在setup中只有对象是经过ref或者reactive处理的，具有响应式，其内部属性是没有响应式的
    </h5>
    <h5>
      4 所以需要在return中使用展开语法返回的同时，再用toRefs批量地使其内部的属性具有响应式
    </h5>
    <br />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({ name: "houdunren", age: 18, gender: "male" });
    const change = () => {
      if (data.name == "houdunren") {
        data.name = "hdcms";
        data.age = 20;
        data.gender = "female";
      } else {
        data.name = "houdunren";
        data.age = 18;
        data.gender = "male";
      }
    };

    console.log(toRefs(data));
    return { change, ...toRefs(data) };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <h4>控制class样式</h4>
    <class-control></class-control>

    <h4>根据数据中的条件控制样式</h4>
    <class-list></class-list>

    <h4>父组件的样式通过$attrs.class作用到子组件</h4>
    <class-style class="cs"></class-style>
  </div>
</template>

<script>
import classControl from "./classStyle/ClassControl.vue";
import classList from "./classStyle/ClassList.vue";
import classStyle from "./classStyle/ClassStyle.vue";
export default {
  components: {
    classControl,
    classList,
    classStyle,
  },
};
</script>

<style lang="scss">
.cs {
  font-size: 20px;
  font-weight: bolder;
  color: blue;
}
</style>

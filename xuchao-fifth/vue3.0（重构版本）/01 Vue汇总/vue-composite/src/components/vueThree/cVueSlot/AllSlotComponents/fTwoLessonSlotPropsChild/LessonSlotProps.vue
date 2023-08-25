<template>
  <div class="text">
    <h5>这个例子使用插槽slot的props分为几个步骤</h5>
    <h5>1 在子组件中定义lesson的orops，父组件通过props将遍历数据后的每一项传入子组件</h5>
    <h5>2 在子组件中定义两个插槽，第一个为具名插槽icon，第二个为默认插槽</h5>
    <h5>3 在子组件的第二个默认插槽的slot标签中设置content status id三个属性</h5>
    <h5>4 为演示方便content和status的值为固定值 id为通过props传入的lesson的id</h5>
    <h5>5 在父组件中使用template和template标签内部v-slot调用默认插槽</h5>
    <h5>6 v-slot后面连上“=”，赋值slotProps，这是一个对象，包含步骤3中的三个属性</h5>
    <h5>7 在默认插槽内部放置一个按钮，添加删除事件，传入slotProps的id值</h5>
  </div>
  <div>
    <lesson-slot-props-child v-for="lesson in Lessons" :key="lesson.id" :lesson="lesson">
      <!-- 如果子组件只有一个默认插槽，父组件中可以把插槽的绑定放到子组件标签上 -->
      <!-- 
    <lesson-slot-props-child 
        v-for="lesson in Lessons" 
        :key="lesson.id" 
        :lesson="lesson" 
        v-slot="slotProps"> 
    -->

      <template v-slot:icon> :） </template>

      <!-- 当使用默认插槽的时候绑定插槽props的方法 -->
      <template v-slot="slotProps">
        <!-- <template v-slot:default="slotProps"> -->
        <!-- <template #default="slotProps"> -->

        <!-- 当使用具名插槽的时候绑定插槽props的方法 -->
        <!-- <template v-slot:abc="slotProps"> -->

        <br />
        {{ slotProps }}
        <span @click="del(slotProps.id)">删除</span>
      </template>
    </lesson-slot-props-child>
  </div>
</template>

<script>
import LessonSlotPropsChild from "./Child/LessonSlotPropsChild";
import deepCopy from "../../../../../../utls/deepCopy";
import db from "../../../../../../data/lessonData";
export default {
  components: {
    LessonSlotPropsChild,
  },
  data() {
    return {
      Lessons: deepCopy(db),
    };
  },
  methods: {
    del(id) {
      let index = this.Lessons.findIndex((l) => l.id == id);
      console.log(index);
      this.Lessons.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  padding: 5px;
  line-height: 30px;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>

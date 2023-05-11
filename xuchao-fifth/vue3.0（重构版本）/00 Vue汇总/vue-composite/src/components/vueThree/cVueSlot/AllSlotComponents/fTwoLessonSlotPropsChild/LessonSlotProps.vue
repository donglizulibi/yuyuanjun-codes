<template>
  <h5>这个例子使用插槽slot的props分为几个步骤</h5>
  <h5>1 父组件通过props把每个子组件的数据传到子组件的区域</h5>
  <h5>
    2 子组件中设置了一个默认插槽slot，slot标签中设置了id属性，绑定了父组件传过来数据中的id
  </h5>
  <h5>3 父组件中子组件双标签内设置template标签，在标签内使用v-slot指令</h5>
  <h5>
    4 为了接收到子组件默认插槽标签内的id属性，以及其他属性，需要用v-slot绑定slotProps
  </h5>
  <h5>
    5
    由于子组件设置的是默认插槽，所以v-slot:default="slotProps"可以省略为v-slot="slotProps"
  </h5>
  <h5>
    6
    表示子组件插槽名用冒号，接收插槽的属性用等于号绑定slotProps，上面也可以写为#default="slotProps"
  </h5>

  <h5>7 父组件再传入按键，绑定点击事件，将slotProps中的id作为实参传入点击事件</h5>
  <h5>8 如果子组件只有一个插槽，可以把v-slot="slotProps"放在父组件中的子组件标签上</h5>
  <h5>9 如果子组件由多个插槽，就只能把v-slot="slotProps"放在对应插槽的template标签上</h5>
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
import LessonSlotPropsChild from "./Child/LessonSlotPropsChild.vue";
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
</style>

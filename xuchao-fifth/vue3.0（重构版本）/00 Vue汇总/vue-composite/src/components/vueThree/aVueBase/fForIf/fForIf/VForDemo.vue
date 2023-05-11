<template>
  <button @click="orderType = 'asc'" :class="{ chose: orderType == 'asc' }">升序</button>

  <button @click="orderType = 'desc'" :class="{ chose: orderType == 'desc' }">
    降序
  </button>
  <div style="display: inline-block; width: 20px"></div>
  <button @click="orderBy = 'price'" :class="{ chose: orderBy == 'price' }">价格</button>
  <button @click="orderBy = 'comments'" :class="{ chose: orderBy == 'comments' }">
    点击数
  </button>

  <div v-for="lesson in lessonList" :key="lesson.id">
    课程名称：{{ lesson.title }} || 价格：{{ lesson.price }} || 点击数:{{
      lesson.comments
    }}
  </div>
</template>

<script>
import Lessons from "./Lesson_demo";
export default {
  data() {
    return {
      Lessons,
      orderBy: "price",
      orderType: "asc",
    };
  },

  computed: {
    // 在这里lessonList里面有orderType和orderby两个响应式数据
    // 这两个数据改了，lessonList数据就要跟着改变
    lessonList() {
      return this.Lessons.sort((a, b) => {
        return this.orderType == "asc"
          ? a[this.orderBy] - b[this.orderBy]
          : b[this.orderBy] - a[this.orderBy];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: solid black 2px;
  margin-left: 5px;
}
.chose {
  background-color: red;
  color: aliceblue;
}
</style>

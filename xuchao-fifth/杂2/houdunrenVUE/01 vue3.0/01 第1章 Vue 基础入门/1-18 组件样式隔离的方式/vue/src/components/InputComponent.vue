<template>
  <div class="inputComponent">
    <!-- 单行文本输入input与多行文本输入textarea -->
    <div>
      <input type="text" v-model="form.title" />
      <span>form.title: {{ form.title }}</span>
    </div>
    <div>
      <textarea name="" v-model="form.content"></textarea>
      <span>form.content: {{ form.content }}</span>
    </div>

    <!-- 单选框true or false -->
    <input type="checkbox" v-model="formCheck.isPost" />
    <span>{{ formCheck }}</span>

    <hr />
    <!-- 单选框yes or no -->
    <input
      type="checkbox"
      v-model="formCheckYesOrNo.isPost"
      true-value="yes"
      false-value="no"
    />
    <span>{{ formCheckYesOrNo }}</span>

    <hr />

    <!-- 使用v-for构造复选框 -->
    <label for="" v-for="lesson in lessons" :key="lesson.value">
      <input
        style="margin-left: 20px"
        type="checkbox"
        :value="lesson.value"
        v-model="form.lessons"
      />{{ lesson.title }}
    </label>
    <div>{{ form }}</div>
  </div>
</template>

<script>
const form = { title: "", content: "", lessons: [] };
const formCheck = { title: "", content: "", isPost: false };
const formCheckYesOrNo = { title: "", content: "", isPost: "yes" };
const lessons = [
  { title: "php", value: "php" },
  { title: "js", value: "js" },
  { title: "css", value: "css" },
];
export default {
  data() {
    return {
      form,
      formCheck,
      formCheckYesOrNo,
      lessons,
    };
  },
};
</script>

<style lang="scss" scoped>
textarea {
  margin-top: 10px;
  // display: block;
}
span {
  display: inline-block;
  margin-left: 10px;
}
</style>

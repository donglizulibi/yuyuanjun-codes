<template>
  <div>
    <input type="text" :value="content" @input="content = $event.target.value" />
    <span>{{ content }}</span>
    <br />
    <input type="text" v-model="title" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "hdcms",
      title: "hdcms",
    };
  },
};
</script>

<style lang="scss" scoped></style>

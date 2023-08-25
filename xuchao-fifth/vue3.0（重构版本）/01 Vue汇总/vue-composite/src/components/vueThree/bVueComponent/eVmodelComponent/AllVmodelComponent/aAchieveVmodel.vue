<template>
  <div>
    <h5>input和value方法</h5>
    <h5>input标签内的input绑定中传入$event实参</h5>
    <h5>绑定value值是为了使初始值相同</h5>
    <input type="text" :value="content" v-on:input="inputValue($event)" />
    <!-- <input type="text" :value="content" @input="content = $event.target.value" /> -->
    <span>{{ content }}</span>
    <br />
    <br />
    <h5>v-model方法</h5>
    <input type="text" v-model="title" />
    <span>{{ title }}</span>
    <br />
    <br />
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
  methods: {
    inputValue(event) {
      this.content = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
·

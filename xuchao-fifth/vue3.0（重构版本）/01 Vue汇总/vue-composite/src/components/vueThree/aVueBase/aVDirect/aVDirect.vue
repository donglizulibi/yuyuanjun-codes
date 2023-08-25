<template>
  <div>
    <h4>v-html</h4>
    <div v-html="htmldata"></div>

    <h4>v-text</h4>
    <div v-text="textdata"></div>

    <h4>v-bind动态添加id</h4>
    <div v-bind:id="id">{{ name }}</div>

    <h4>v-show和v-on</h4>
    <div v-show="state">需要显示隐藏的内容</div>
    <button v-on:click="btn">{{ state ? "隐藏" : "显示" }}</button>

    <h4>v-once</h4>
    <div>{{ station }}</div>
    <div v-once>{{ station }}</div>
    <button v-on:click="change">修改数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmldata: `<div style='color:blue'>houdunren</div>`,
      textdata: "textdata",
      id: null,
      name: "dhhhh",
      state: true,
      station: "Estonia",
    };
  },

  mounted() {
    setTimeout(() => {
      this.id = "hd";
    }, 2000);
  },
  methods: {
    btn() {
      this.state = !this.state;
    },
    change() {
      this.station = "Latvijas";
    },
  },
};
</script>

<style lang="scss" scoped></style>

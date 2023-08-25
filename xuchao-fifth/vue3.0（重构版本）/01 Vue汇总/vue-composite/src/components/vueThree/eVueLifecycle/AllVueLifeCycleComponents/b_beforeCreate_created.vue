<template>
  <h4>在本组件的created和beforeCreate的Api中都放入读取本组件数据和模板的语句</h4>
  <h4>结果created可以读取到数据，但无法读取模板</h4>
  <h4>而beforeCreate二者都无法读取</h4>
  <h4>一般来说，发送请求的操作会放在created这个api中</h4>
  <div ref="main">
    <p id="text"></p>
  </div>
  <br />
</template>

<script>
export default {
  data() {
    return {
      createData: "asdf",
    };
  },
  created() {
    console.log("created: ", this.createData);
    console.log("created: ", document.querySelector("#text"));
  },
  beforeCreate() {
    console.log("beforeCreate: ", this.createData);
    console.log("beforeCreate: ", document.querySelector("#text"));
  },
  //   mounted() {
  //     console.log(document.querySelector("#text"));
  //     console.log(this.$refs.main);
  //   },
};
</script>

<style lang="scss" scoped></style>

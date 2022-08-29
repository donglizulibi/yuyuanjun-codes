<template>
  <div :class="buttonType">{{ contentObj.text }}</div>
  <br />
  <button @click="contentObj.text = 'houdunren'">子组件</button>
  <span>{{ contentObj.text }}</span
  ><br />
</template>

<script>
export default {
  props: {
    contentObj: {
      type: Object,
      validator(v) {
        console.log(v);
        return 1;
      },
    },
    buttonType: {
      type: String,
      default: "info",
    },
    hdTip: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  margin: 10px;
  padding: 5px 10px;
  color: #fff;
  opacity: 0.6;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
  &.info {
    background-color: rgba(221, 221, 221, 0.824);
  }
  &.success {
    background-color: green;
  }
  &.danger {
    background-color: red;
  }
}
span {
  display: inline-block;
  margin-bottom: 10px;
}
</style>

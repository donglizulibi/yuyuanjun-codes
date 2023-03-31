<template>
  <div :class="buttonType" @click="click">{{ text }}</div>
  <br />
  <span>{{ click }}</span>
  <br />
  <button v-bind="$attrs">按键</button>
  <br />
</template>

<script>
export default {
  //   inheritAttrs: false,
  props: {
    click: { type: Function },
    contentStr: {
      type: String,
    },
    buttonType: {
      type: String,
      default: "info",
    },
    hdTip: {
      type: String,
    },
  },
  data() {
    return {
      text: this.contentStr,
    };
  },
  watch: {
    contentStr(v) {
      console.log(v);
      this.text = v;
    },
  },
  methods: {},
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

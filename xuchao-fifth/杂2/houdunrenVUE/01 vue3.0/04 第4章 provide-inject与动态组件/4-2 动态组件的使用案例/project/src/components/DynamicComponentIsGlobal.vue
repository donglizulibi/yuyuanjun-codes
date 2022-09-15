<template>
  <div>
    <div class="btn">
      <button
        v-for="(item, index) in components"
        :key="index"
        @click="select(item.name, $event)"
        :class="{ [item.name]: item.name == 'wexin' }"
        :titleName="item.name"
      >
        {{ item.title }}
      </button>
    </div>
    <keep-alive>
      <component :is="currentComponent" ref="componentRef" id="com" />
    </keep-alive>

    <hr />
    <button @click="onClick">调用input标签</button>
    <br />
    <input type="text" ref="input" id="hd" />
    <hr />
    <button @click="onComponent">调用component动态组件</button>
  </div>
</template>

<script>
import Pay from "./Child/pay.vue";
import Wexin from "./Child/wexin.vue";
import turnWhite from "../../utils/turnWhite";
import Site from "./Child/site.vue";
import config from "../config.js";
export default {
  provide() {
    return { config: this.config };
  },
  components: { Pay, Wexin, Site },
  data() {
    return {
      config,
      components: [
        { title: "微信管理", name: "wexin" },
        { title: "网站配置", name: "site" },
        { title: "在线支付", name: "pay" },
      ],
      currentComponent: "wexin",
    };
  },
  methods: {
    select(name, event) {
      this.currentComponent = name;
      turnWhite(name, event);
    },
    onClick() {
      console.dir(this.$refs.input);
      this.$refs.input.value = "houdunren";

      let hd = document.querySelector("#hd");
      console.dir(hd);
    },
    onComponent() {
      console.log(this.$refs);

      if ("show" in this.$refs.componentRef) {
        this.$refs.componentRef.show();
      } else {
        console.log("这个组件没有此方法");
      }

      let com = document.querySelector("#com");
      console.log(com);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: space-between;
  button {
    border: 2px solid grey;
    transition: 0.5s;
    &.pay {
      background-color: aqua;
    }
    &.wexin {
      background-color: bisque;
    }
    &.site {
      background-color: blueviolet;
    }
  }
}
</style>

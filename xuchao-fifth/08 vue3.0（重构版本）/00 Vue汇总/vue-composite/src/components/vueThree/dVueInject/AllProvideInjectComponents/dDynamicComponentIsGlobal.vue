<template>
  <div>
    <h5>1 在父组件中引入配置数据，通过依赖注入传递到子组件，也就是两个面板组件</h5>
    <h5>2 添加一个面板组件，并使用keep-alive暂存未编辑完的数据</h5>
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
      <component :is="currentComponent" />
    </keep-alive>
  </div>
</template>

<script>
import Pay from "./dDynamicComponentGlobal/Child/pay.vue";
import Wexin from "./dDynamicComponentGlobal/Child/wexin.vue";
import turnWhite from "../../../../../utls/turnWhite";
import Site from "./dDynamicComponentGlobal/Child/site.vue";
import config from "./dDynamicComponentGlobal/config.js";
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

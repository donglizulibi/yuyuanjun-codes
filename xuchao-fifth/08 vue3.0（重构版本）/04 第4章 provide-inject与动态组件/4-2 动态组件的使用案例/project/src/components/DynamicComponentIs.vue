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
    {{ currentComponent }}
    <component :is="currentComponent" />
  </div>
</template>

<script>
import Pay from "./Child/pay.vue";
import Wexin from "./Child/wexin.vue";
import turnWhite from "../../utils/turnWhite";
export default {
  components: { Pay, Wexin },
  data() {
    return {
      components: [
        { title: "微信管理", name: "wexin" },
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
    &.pay {
      background-color: aqua;
    }
    &.wexin {
      background-color: bisque;
    }
  }
}
</style>

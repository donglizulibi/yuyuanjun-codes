<script>
import pay from "./components/pay.vue";
import wexin from "./components/wexin.vue";
export default {
  components: {
    pay,
    wexin,
  },
  data() {
    return {
      // 动态组件的使用案例的数据
      components: [
        { title: "微信管理", name: "wexin" },
        { title: "在线支付", name: "pay" },
      ],
      payMid: "none",
      weixinMid: "block",
      currentMid: "pay",
      currentComponent: "wexin",
      midBool: false,
    };
  },
  methods: {
    // 动态组件的使用案例的的方法
    hd(value, event) {
      // 1 找到两个按钮的父元素
      console.log(event.target.parentNode.parentNode.children);

      // 2 找到两个按钮元素，放在一个数组里
      let a = Array.prototype.map.call(
        event.target.parentNode.parentNode.children,
        (item) => {
          // console.log(item);
          return item.children[0];
        }
      );
      console.log(a);

      // 3 点击其中一个按钮的时候，返回另一个按钮
      let b = a.find((item) => {
        return item.className != value;
      });
      console.log(b);

      // 4 把另一个按钮的背景颜色变成白色
      b.style.backgroundColor = "white";

      // 5 根据返回值控制正在点击的按钮的样式，以及显示组件的样式
      console.log(value);
      if (value == "pay") {
        this.payMid = "block";
        this.weixinMid = "none";
        event.target.style.backgroundColor = "aqua";
      } else {
        event.target.style.backgroundColor = "bisque";
        this.payMid = "none";
        this.weixinMid = "block";
      }
    },
  },
};
</script>

<template>
  <h3>动态组件的使用案例</h3>
  <!-- 动态显示组件 第一种方法 使用style绑定 -->
  <div>
    <div class="btn">
      <div v-for="(com, index) in components" :key="index">
        <button
          @click="hd(com.name, $event)"
          :class="{ [com.name]: com.name == 'wexin' }"
        >
          {{ com.title }}
        </button>
      </div>
    </div>
    <pay :style="{ display: payMid }"></pay>
    <wexin :style="{ display: weixinMid }"></wexin>
  </div>
  <hr />

  <!-- 动态显示组件 第二种方法 使用v-if -->
  <div>
    <div class="btn">
      <div v-for="(com, index) in components" :key="index">
        <button @click="currentMid = com.name">{{ com.title }}</button>
      </div>
    </div>
    <div>
      <div v-if="currentMid == 'pay'">
        <pay></pay>
      </div>
      <div v-else>
        <wexin></wexin>
      </div>
    </div>
  </div>
  <hr />
  <!-- 动态显示组件 第三种方法，component标签绑定is -->
  <div>
    <div class="btn">
      <div v-for="(com, index) in components" :key="index">
        <button @click="currentComponent = com.name">
          {{ com.title }}
        </button>
      </div>
    </div>
    {{ this.currentComponent }}
    <component :is="currentComponent" />
  </div>
</template>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: space-around;
  button {
    border: 1px solid black;
    display: block;
    // &[content="pay"] {
    //   background-color: aqua;
    // }
    // &[content="wexin"] {
    //   background-color: bisque;
    // }
    &.pay {
      background-color: aqua;
    }
    &.wexin {
      background-color: bisque;
    }
  }
}
</style>

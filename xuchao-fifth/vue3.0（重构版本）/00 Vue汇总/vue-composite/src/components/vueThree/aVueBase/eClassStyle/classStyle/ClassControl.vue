<template>
  <div class="ClassControl">
    <div :class="[{ current: active }]">houdunren</div>
    <button @click="btn">控制背景颜色</button>
    <!-- 关于绑定样式的控制，可以把需要绑定的样式以“样式名称:布尔值”的形式 -->
    <!-- 放到一个对象里，然后直接放到:class后面绑定起来 -->
    <!-- 如果有多个绑定的样式需要控制，可以以键值对的形式放在一个数组里 -->
    <!-- 然后统一放到:class后面 -->

    <!-- 或者把样式作为一个对象放在data里面，以下这个里绑定样式也可以不放在数组里 -->
    <div :class="[classList]">houdunrenList</div>
    <button @click="btnList">控制一组样式</button>

    <!-- 或者把样式放在computed里面，但是需要加上{{num}}，确保响应式 -->
    <div :class="[classCom]">houdunrenListCom{{ num }}</div>
    <button @click="btnListCom">计算属性控制样式</button>
  </div>
</template>

<script>
// 这个组件对应的是1-19小节
export default {
  data() {
    return {
      active: true,
      num: 1,
      classList: {
        hd: true,
        xj: true,
      },
    };
  },
  computed: {
    classCom() {
      return {
        com_bg_color: true,
        com_color: true,
      };
    },
  },
  methods: {
    btn() {
      this.active = !this.active;
    },
    btnList() {
      Object.keys(this.classList).forEach((item) => {
        this.classList[item] = !this.classList[item];
      });
    },
    btnListCom() {
      this.num++;

      // 那么在这里就出现了一个关于计算属性computed的特性
      // 把修改动态绑定样式的代码放在这个点击事件中
      // 如果标签内部没有响应式数据的改变的话
      // 则computed所表示的属性也不会改变

      // 但是如果在这个点击事件中加上响应式数据变化的操作
      // 在标签元素内显示这个数据
      // 那么关于样式属性的改变也会生效
      Object.keys(this.classCom).forEach((item) => {
        this.classCom[item] = !this.classCom[item];
      });
      console.log(this.classCom);
    },
  },
};
</script>

<style lang="scss" scoped>
.ClassControl {
  .current {
    background-color: aqua;
  }

  button {
    border: 2px solid black;
    // border-radius: 0;
  }

  .hd {
    background-color: greenyellow;
  }

  .xj {
    color: red;
  }
  .com_bg_color {
    background-color: bisque;
  }
  .com_color {
    color: blue;
  }
}
</style>

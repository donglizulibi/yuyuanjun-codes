<template>
  <div class="text">
    <h5>步骤</h5>
    <h5>1 在子组件中引入要切换的两个页面</h5>
    <h5>2 使用shallowRef创建变量，包裹其中一个页面</h5>
    <h5>3 在子组件中设置按钮，绑定切换shallowRef变量为其他页面的函数</h5>
    <h5>4 在子组件的插槽中设置Component属性，动态绑定shallowRef变量</h5>
    <h5>5 在父组件中调用子组件，调用默认插槽，使用解构的方法拿到Component</h5>
    <h5>
      6
      如果子组件只有一个插槽，父组件中可以把插槽的绑定放到子组件标签上，而不需要使用template
    </h5>
    <h5>在父组件调用的子组件标签内使用component标签和:is，显示动态组件</h5>
  </div>
  <div>
    <com-slot-props-child #default="{ Component }">
      <component :is="Component" />
    </com-slot-props-child>
    <!-- <com-slot-props-child #default="slotProps">
      <component :is="slotProps.Component" />
    </com-slot-props-child> -->
  </div>
</template>

<script setup>
import comSlotPropsChild from "./componentSlotPropsChild/comSlotPropsChild.vue";
</script>

<style lang="scss" scoped>
.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px;
}
</style>

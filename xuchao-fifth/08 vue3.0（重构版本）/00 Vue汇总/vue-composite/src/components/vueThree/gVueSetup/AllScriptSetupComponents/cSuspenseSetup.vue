<template>
  <div>
    <h5>把子组件中发送请求的部分放在onMounted外面，改为await方式获取异步数据</h5>
    <h5>
      此时无法加载页面，出现no Suspense boundary was found in the parent component
      tree报错
    </h5>
    <h5>在父组件的子组件标签外层套上suspense标签，可以读取数据</h5>
    <h4>子组件的数据</h4>
    <suspense>
      <template #default>
        <div>
          <c-suspense-setup-child></c-suspense-setup-child>
        </div>
      </template>

      <template #fallback>
        <div>loading</div>
      </template>
    </suspense>

    <h4>总结</h4>
    <h5>1 suspense组件的作用的等待子组件内部的异步操作全部完成再加载页面</h5>
    <h5>2 suspense标签内部有两个插槽，第一个默认插槽用来放子组件</h5>
    <h5>3 第二个插槽的名称是fallback，用来放置页面加载完成之前的动画图像</h5>
    <h5>4 script-setup自动包括async，所以在script中只写await也不报错</h5>
    <h5>5 本例在子组件中加上一个promise延时来模拟网络延迟</h5>
    <br />
  </div>
</template>

<script setup>
import cSuspenseSetupChild from "./cSuspenseSetupChild/cSuspenseSetupChild.vue";
</script>

<style lang="scss" scoped></style>

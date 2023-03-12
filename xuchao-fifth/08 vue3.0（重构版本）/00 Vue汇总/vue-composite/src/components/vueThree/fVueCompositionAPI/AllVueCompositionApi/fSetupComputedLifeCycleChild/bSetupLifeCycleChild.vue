<template>
  <div>
    <h5>setup中的生命周期函数不包括beforeCreated和created</h5>
    <h5>可以把setup本身看作created，其他六个写法如下</h5>
    <h5>onMounted, onBeforeMount</h5>
    <h5>onUpdated, onBeforeUpdate</h5>
    <h5>onUnmounted, onBeforeUnmount,</h5>
  </div>
</template>

<script>
import {
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount,
} from "vue";
export default {};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <header>这里是孙组件的区域</header>
    <br />
    <strong>{{ webname }}</strong>
  </div>
</template>

<script>
export default {
  inject: ["webname"],
};
</script>

<style lang="scss" scoped>
div {
  height: 100px;
  width: 260px;
  border: 2px solid black;
}
</style>

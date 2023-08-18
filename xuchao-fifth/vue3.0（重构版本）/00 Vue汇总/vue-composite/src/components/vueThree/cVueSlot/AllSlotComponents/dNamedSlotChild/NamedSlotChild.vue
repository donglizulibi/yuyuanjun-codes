<template>
  <div>
    <header>
      标题
      <slot name="header"></slot>
    </header>
    <main>
      文章
      <slot name="main"> fff </slot>
    </main>
    <footer>
      页脚
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  header,
  main,
  footer {
    border: 1px solid black;
    padding: 10px;
    margin-top: 10px;
  }
}
</style>

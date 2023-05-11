<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
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

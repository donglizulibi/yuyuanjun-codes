<template>
  <div class="card">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  padding: 0;
  margin-left: 10px;

  header {
    background-color: slategray;
    color: floralwhite;
    padding: 10px;
    font-weight: bolder;
    // font-size: 14px;
    // margin-bottom: px;
  }
}
</style>

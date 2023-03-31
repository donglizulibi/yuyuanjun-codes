<template>
  <div>
    <button><slot /></button>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="scss" scoped>
button {
  border: 2px black solid;
  background-color: aqua;
}
</style>

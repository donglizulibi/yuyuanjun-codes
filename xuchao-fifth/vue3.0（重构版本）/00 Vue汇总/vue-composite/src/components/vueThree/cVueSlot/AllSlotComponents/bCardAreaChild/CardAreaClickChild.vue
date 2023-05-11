<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      alert("这里是子组件的show方法");
    },
  },
};
</script>

<style lang="scss" scoped></style>

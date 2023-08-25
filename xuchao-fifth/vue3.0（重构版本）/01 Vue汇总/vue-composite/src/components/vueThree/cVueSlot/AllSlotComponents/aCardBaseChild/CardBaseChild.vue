<template>
  <div>
    <div class="hd" @click="show()">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    show() {},
  },
};
</script>

<style lang="scss" scoped>
.hd {
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  background-color: aqua;
  opacity: 0.3;
  border-radius: 10px;
}
</style>

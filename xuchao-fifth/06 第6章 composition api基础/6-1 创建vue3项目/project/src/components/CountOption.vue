<template>
  <div>
    <button>-</button>
    <span>{{ num }}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return { num: 2 };
  },
  methods: {
    add() {
      console.log(this.num);
      this.num++;
    },
  },
};
</script>

<style lang="scss" scoped></style>

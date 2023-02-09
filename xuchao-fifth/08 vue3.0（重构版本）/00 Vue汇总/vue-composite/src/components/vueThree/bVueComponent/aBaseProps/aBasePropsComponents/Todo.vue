<template>
  <div @click="cli">{{ dataPass.title }}{{ showData }}</div>
</template>

<script>
export default {
  props: ["dataPass"],
  data() {
    return {
      showData: "",
    };
  },
  methods: {
    cli(e) {
      console.log(e.target.innerHTML);
      this.showData = e.target.innerHTML;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 200px;
  background-color: green;
  padding: 10px;
  color: white;
  margin: 10px auto;
}
</style>

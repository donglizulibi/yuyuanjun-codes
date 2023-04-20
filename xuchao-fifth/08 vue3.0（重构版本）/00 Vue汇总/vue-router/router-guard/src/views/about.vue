<template>
  <div>about-{{ title }}</div>
</template>

<script>
export default {
  components: {},
  methods: {},
  beforeCreate() {
    console.log("beforeCreate");
  },
  data() {
    return {
      title: "hd",
    };
  },
  beforeRouteEnter(to, from, next) {
    new Promise((resolve, reject) => {
      resolve();
    }).then(() => {
      setTimeout(() => {
        console.log(123);
        next((a) => {
          console.log(a);
          a.title = "houdunren";
        });
        console.log("beforeRouteEnter");
      }, 100);
    });
  },

  beforeRouteLeave(to, from, next) {
    if (confirm("确认要离开吗")) {
      next();
    }
  },
};
</script>

<style lang="scss" scoped></style>

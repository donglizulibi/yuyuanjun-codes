<template>
  <div>about-{{ title }}</div>
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped></style>

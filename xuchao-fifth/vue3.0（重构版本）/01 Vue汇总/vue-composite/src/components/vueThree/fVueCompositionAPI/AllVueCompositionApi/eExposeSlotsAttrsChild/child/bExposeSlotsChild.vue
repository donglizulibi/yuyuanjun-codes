<template>
  <component :is="defaults[0]"></component>
  <div>这里是子组件固有的内容</div>
  <component :is="defaults[1]"></component>
  <component :is="defaults[2]"></component>
</template>

<script>
export default {
  setup(_, contest) {
    console.log(contest);
    console.log(contest.slots);
    console.log(contest.slots.default);

    let defaults = contest.slots.default();
    console.log(defaults);
    return { defaults };
  },
};
</script>

<style lang="scss" scoped></style>

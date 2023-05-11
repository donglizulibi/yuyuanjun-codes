<template>
  <div class="showChange">
    <div>
      <h4>option Api</h4>
      <pre>{{ changeData.optionData }}</pre>
    </div>
    <p>==></p>
    <div>
      <h4>composition Api</h4>
      <pre>{{ changeData.compositionData }}</pre>
    </div>
  </div>

  <!-- {{ changeData }} -->
</template>

<script>
export default {
  props: ["changeData"],
  data() {
    return {
      change: this.changeData,
    };
  },
};
</script>

<style lang="scss" scoped>
.showChange {
  margin: auto;
  width: 600px;
  //   border: 1px solid black;
  display: flex;
  justify-content: space-around;
  p {
    padding-top: 20%;
    font-weight: bolder;
  }
  pre {
    text-align: left;
    font-weight: bold;
  }
}
</style>

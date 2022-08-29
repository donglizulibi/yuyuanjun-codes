<template>
  <div>
    <span>所有按键都会触发: </span>
    <input type="text" @keyup="key" />
    <hr />
    <span>只有按k才会触发: </span>
    <input type="text" @keyup.k="key" />
    <hr />
    <span>同时按住ctrl和q才会触发: </span>
    <input type="text" @keyup.ctrl.q="key" />
    <hr />
    <span>同时按住ctrl、alt和m才会触发: </span>
    <input type="text" @keyup.alt.ctrl.m="key" />
    <hr />
    <div class="mouse">
      <div @click.ctrl="hd">
        <span>按住ctrl同时点击鼠标触发</span>
        <span>按住ctrl的同时按住其他键也触发</span>
      </div>
      <div @click.ctrl.exact="hd">
        <span>只能是ctrl加上点击才触发</span>
        <span>除ctrl外同时按其他键无效</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    key(event) {
      console.log(event.key);
    },
    hd(evnet) {
      console.log(event);
    },
  },
};
</script>

<style lang="scss" scoped>
.mouse {
  border: 10px solid grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 400px;
  div {
    height: 100px;
    width: 100px;
    background-color: blue;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    span {
      display: block;
      width: 120px;
      height: 50px;
      position: absolute;
      text-align: left;
    }
    span:nth-of-type(1) {
      top: -45px;
      left: 0;
    }
    span:nth-of-type(2) {
      bottom: -50px;
      left: 0;
    }
  }
}
</style>

<template>
  <table border="1" class="my-table">
    <thead>
      <tr>
        <th v-for="info of tHead" :key="info.key">{{ info.text }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) of tBody" :key="item.id">
        <!-- <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.chinese }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td> -->
        <td
          v-for="(value, key) in item"
          :key="key"
          @click.stop="showEditInput($event, key, index)"
        >
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { createApp, toRefs, ref, reactive } from "vue";
// import EditInput from "./compoment/EditInput.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        tHead: [],
        tBody: [],
      };
    },
  },
});

const emit = defineEmits(["submit"]);

console.log(props.data);
const { tHead, tBody } = toRefs(props.data);

const state = reactive({
  key: "",
  value: "",
  index: -1,
  text: "",
});

let tr = null;
const showEditInput = (e, key, index) => {
  tr && removeEditInputApp();
  if (!checkEditable(key)) return;
  tr = e.target;
  const target = e.target;
  const input = document.createElement("input");

  input.style.cssText += `
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
    box-sizing: border-box;
    border: 1px solid orange;
    text-align: center;
    outline: none;
  `;

  input.value = target.innerHTML;
  target.innerHTML = "";
  target.append(input);

  input.select();

  input.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  input.addEventListener("blur", (event) => {
    // console.log(event.target.value);
    setData({ index, key, text: findText(key) });
    setValue(event.target.value);
  });
};

function setData({ index, key, text, value = "" }) {
  state.index = index;
  state.key = key;
  state.value = value;
  state.text = text;
}

function checkEditable(key) {
  const check = tHead.value.find((item) => item.key == key);
  return check.editable;
}

function findText(key) {
  const Text = tHead.value.find((item) => item.key == key);
  return Text.text;
}

function setValue(value) {
  state.value = value * 1;
  emit("submit", { ...state }, removeEditInputApp);
}

window.addEventListener("click", () => {
  removeEditInputApp();
});

function removeEditInputApp(orignal = null) {
  // console.log("orignal", orignal);
  // console.log(tr);
  if (tr) {
    tr.removeChild(tr.childNodes[0]);
    if (orignal) {
      state.value = orignal;
    }
    tr.innerHTML = state.value;
  }
}
</script>

<style lang="scss" scoped>
.my-table {
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 44px;
    td {
      text-align: center;
      cursor: pointer;
      position: relative;
    }
  }
}

// .input {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   box-sizing: border-box;
//   border: 1px solid orange;
//   text-align: center;
//   outline: none;
//   background-color: aqua;
// }

// .input {
//   background-color: aqua;
// }
</style>

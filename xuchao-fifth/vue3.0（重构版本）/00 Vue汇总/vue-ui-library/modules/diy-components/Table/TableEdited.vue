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
import EditInput from "./compoment/EditInput.vue";

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
// console.log(tHead.value);

const state = reactive({
  key: "",
  value: "",
  index: -1,
  text: "",
});

let editInputApp = null;
const showEditInput = (e, key, index) => {
  editInputApp && removeEditInputApp();

  if (!checkEditable(key)) return;

  const target = e.target;
  const oFrag = document.createDocumentFragment();

  editInputApp = createApp(EditInput, {
    value: target.textContent,
    setValue,
  });

  if (editInputApp) {
    editInputApp.mount(oFrag);
    target.appendChild(oFrag);
    target.querySelector(".edit-input").select();
  }

  console.log(state);
  console.log(key, index);
  setData({ index, key, text: findText(key) });
  console.log(state);
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
  console.log("setValue: ", value);
  state.value = value * 1;
  console.log(state);
  console.log({ ...state });

  emit("submit", { ...state }, removeEditInputApp);
}

// 在父组件中创建一个函数，这个函数的函数体中触发祖父组件的自定义事件
// 但是这个函数会通过props传到到子组件中，并在子组件中执行这个函数

window.addEventListener("click", () => {
  removeEditInputApp();
});

function removeEditInputApp() {
  editInputApp && editInputApp.unmount();
  setData({ key: "", value: "", index: -1, text: "" });
}

// console.log(tBody);
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
</style>

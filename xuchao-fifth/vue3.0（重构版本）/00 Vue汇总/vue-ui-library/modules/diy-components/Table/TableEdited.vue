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

  <!-- <edit-input></edit-input> -->
</template>

<script setup>
import { createApp, toRefs, ref } from "vue";
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

let editInputApp = null;
const showEditInput = (e, key, index) => {
  editInputApp && removeEditInputApp(editInputApp);
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
};

function setValue(value) {}

// const tHead = ref(props.data.tHead);
// const tBody = ref(props.data.tBody);

window.addEventListener("click", () => removeEditInputApp(editInputApp));

function removeEditInputApp(app) {
  app && app.unmount();
}

const { tHead, tBody } = toRefs(props.data);
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

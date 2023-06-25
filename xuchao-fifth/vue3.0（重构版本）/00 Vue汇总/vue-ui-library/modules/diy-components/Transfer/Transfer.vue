<template>
  <div>
    <div>
      <select @change="setTargetIndex($event.target.value)">
        <option v-for="(title, index) of options" :value="index">
          {{ title }}
        </option>
      </select>
    </div>

    <div class="transfer">
      <div class="box left-list">
        <h1 class="list-title">
          <input
            id="chooseAllLeft"
            type="checkbox"
            :disabled="chooseDisabledLeft()"
            @click="chooseAllLeft($event.target.checked, leftListData, checkedData)"
          />{{ leftTitle }}
        </h1>
        <div>
          <div
            v-for="item of leftListData"
            :key="item.id"
            :class="['list-item', item.disabled ? 'disabled' : '']"
          >
            <input
              type="checkbox"
              :id="'checkbox__' + item.id"
              :disabled="item.disabled"
              @click="setCheckedData($event.target.checked, 'left', item)"
            />

            <label :for="'checkbox__' + item.id">
              {{ item.phone_name }}
            </label>
          </div>
        </div>
      </div>
      <div class="box button-group">
        <button
          :disabled="transferDisabled.left"
          @click="removeRightListData(checkedData.right)"
        >
          &lt;
        </button>
        <button
          :disabled="transferDisabled.right"
          @click="addRightListData(checkedData.left)"
        >
          &gt;
        </button>
      </div>
      <div class="box right-list">
        <h1 class="list-title">
          <input
            id="chooseAllRight"
            type="checkbox"
            :disabled="rightListData.length == 0"
            @click="chooseAllRight($event.target.checked, rightListData, checkedData)"
          />{{ rightTitle }}
        </h1>
        <div>
          <div
            v-for="item of rightListData"
            :key="item.id"
            :class="['list-item', item.disabled ? 'disabled' : '']"
          >
            <input
              type="checkbox"
              :id="'checkbox__' + item.id"
              :disabled="item.disabled"
              @click="setCheckedData($event.target.checked, 'right', item)"
            />

            <label :for="'checkbox__' + item.id">
              {{ item.phone_name }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import propsDefination from "./extends/props";
import {
  useRightListData,
  useTargetIndex,
  useComputedData,
  useCheckedData,
  useChooseAll,
} from "./extends/hooks";

const props = defineProps(propsDefination);
const options = props.data.map((item) => item.title);

const [targetIndex, setTargetIndex] = useTargetIndex(0);

const [removeCheckedData, addCheckedData, checkedData] = useCheckedData();

const setCheckedData = (checked, leftOrRight, item) => {
  if (checked) {
    addCheckedData(leftOrRight, item);
  } else {
    removeCheckedData(leftOrRight, item.id);
  }
};

const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkedData
);

const { leftTitle, leftListData, transferDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
);

const [chooseAllLeft, chooseAllRight] = useChooseAll(
  leftListData,
  rightListData,
  checkedData,
  setCheckedData
);

const chooseDisabledLeft = () => {
  const state = leftListData.value.every((item) => item.disabled);
  if (leftListData.length == 0 || state) {
    return true;
  }
};
</script>

<style lang="scss" scoped>
.transfer {
  height: 300px;
  width: 360px;
  display: flex;
  flex-direction: row;
  .box {
    width: 120px;
    height: 100%;
    border: 1px solid grey;
    .list-item {
      display: flex;
      align-items: center;
      //   background-color: #409eff;
      color: #666;
      font-size: 14px;
      height: 30px;
      &.disabled {
        opacity: 0.6;
      }
    }
    &.button-group {
      border-left: 1px solid grey;
      border-right: 1px solid grey;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button {
        border: none;
        outline: none;
        border-radius: 5px;
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #409eff;
        color: white;

        &:disabled {
          opacity: 0.6;
        }
      }
    }
    .list-title {
      font-size: 16px;
      height: 38px;
      background-color: #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #666;
      font-weight: normal;
      margin: 0;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>

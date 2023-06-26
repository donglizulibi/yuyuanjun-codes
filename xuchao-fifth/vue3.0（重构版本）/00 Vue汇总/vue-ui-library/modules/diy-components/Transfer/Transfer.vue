<template>
  <div>
    <selector :data="options" @select-change="setTargetIndex"></selector>

    <div class="transfer">
      <div class="box left-list">
        <list-title
          @choose-all="chooseAllLeft"
          choose-all-id="chooseAllLeft"
          :disabled-state="chooseDisabledLeft()"
          :title="leftTitle"
          :list-data="leftListData"
          :checked-data="checkedData"
          side="left"
        ></list-title>
        <list-data
          @checkbox-click="setCheckedData"
          :list-data="leftListData"
          left-or-right="left"
        ></list-data>
      </div>

      <button-group
        @left-button-click="removeRightListData(checkedData.right)"
        @right-button-click="addRightListData(checkedData.left)"
        :transfer-disabled="transferDisabled"
      ></button-group>

      <div class="box right-list">
        <list-title
          @choose-all="chooseAllRight"
          choose-all-id="chooseAllRight"
          :disabled-state="rightListData.length == 0"
          :title="rightTitle"
          :list-data="rightListData"
          :checked-data="checkedData"
          side="right"
        ></list-title>

        <list-data
          @checkbox-click="setCheckedData"
          :list-data="rightListData"
          left-or-right="right"
        ></list-data>
      </div>
    </div>
  </div>
</template>

<script setup>
import Selector from "./compoments/Selector.vue";
import ListTitle from "./compoments/ListTitle.vue";
import ButtonGroup from "./compoments/ButtonGroup.vue";
import propsDefination from "./extends/props";
import ListData from "./compoments/ListData.vue";
import "./css/style.scss";
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
<style lang="scss" scoped></style>

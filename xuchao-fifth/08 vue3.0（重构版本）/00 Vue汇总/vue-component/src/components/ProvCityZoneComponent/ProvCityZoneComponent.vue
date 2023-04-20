<template>
  <div>
    <!-- {{ dataArr }} -->
    <!-- 省级下拉框 -->
    省：
    <select
      v-model="prov"
      v-on:change="
        updataCitys();
        updataZones();
      "
    >
      <option v-for="(item, index) in dataArr" :value="item.ssqname" :key="index">
        {{ item.ssqname }}
      </option>
    </select>

    <!-- 市级下拉框 -->
    市：
    <select v-model="city" @change="updataZones()">
      <option v-for="(item, index) in cityArr" :value="item.ssqname" :key="index">
        {{ item.ssqname }}
      </option>
    </select>

    <!-- 区级下拉框 -->
    区：
    <select v-model="zone">
      <option v-for="(item, index) in zoneArr" :value="item.ssqname" :key="index">
        {{ item.ssqname }}
      </option>
    </select>

    <div>{{ prov }}-{{ city }}-{{ zone }}</div>
  </div>
</template>

<script>
import data from "../../../../data/prov-city-zone";
const dataArr = data.dataArr;
export default {
  data() {
    return {
      dataArr: dataArr,
      prov: "", // 第一个下拉框当前选中的省的数据，默认为北京
      cityArr: [], // 根据prov匹配出的市级信息列表
      city: "", // 第二个下拉框当前选中的市的数据，初始值在updataCitys设置
      zoneArr: [], //// 根据city匹配出的区级信息列表
      zone: "",
    };
  },
  methods: {
    updataCitys() {
      console.log(this.prov);
      this.dataArr.forEach((item) => {
        // 用第一个下来选择框选中的省的值来匹配出这个省对应的市级信息
        if (item.ssqname == this.prov) {
          this.cityArr = item.cities.city;
        }
      });
      console.log(this.cityArr);
      console.log(this.cityArr[0]);
      this.city = this.cityArr[0].ssqname;
    },
    updataZones() {
      console.log(this.city);
      this.cityArr.forEach((item) => {
        if (item.ssqname == this.city) {
          this.zoneArr = item.areas.area;
        }
      });
      console.log("this.zoneArr", this.zoneArr);
      this.zone = this.zoneArr[0].ssqname;
    },
  },
};
</script>

<style lang="scss" scoped></style>

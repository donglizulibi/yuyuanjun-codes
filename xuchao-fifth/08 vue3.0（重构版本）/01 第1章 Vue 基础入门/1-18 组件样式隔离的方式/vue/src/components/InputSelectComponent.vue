<template>
  <div>
    <!-- 单选框 -->
    <input type="radio" v-model="form.sex" value="1" /> 男
    <input type="radio" v-model="form.sex" value="2" /> 女
    <!-- 如果想让value后面绑定的是数值而非字符串，可以:value='1' -->
    {{ form }}

    <hr />
    <!-- 下拉列表框（单选） -->
    <select v-model="form.city">
      <option value="">===请选择城市===</option>
      <option value="beijing">北京</option>
      <option value="wuhan">武汉</option>
    </select>
    <hr />
    <!-- 下拉列表框（多选） -->
    <!-- 多选的时候要按住ctrl按键 -->
    <select v-model="formCitys.citys" multiple>
      <option value="">===请选择城市===</option>
      <option value="beijing">北京</option>
      <option value="wuhan">武汉</option>
      <!-- 在这里option里面的value可以是对象 -->
      <option :value="{ name: 'nanjing' }">南京</option>
      <option :value="{ name: 'shanghai' }">上海</option>
    </select>
    <hr />
    {{ formCitys }}
  </div>
</template>

<script>
const form = { title: "houdunren", sex: 1, city: "beijing" };
const formCitys = { title: "houdunren", sex: 1, citys: [] };

export default {
  data() {
    return {
      form,
      formCitys,
    };
  },
};
</script>

<style lang="scss" scoped></style>

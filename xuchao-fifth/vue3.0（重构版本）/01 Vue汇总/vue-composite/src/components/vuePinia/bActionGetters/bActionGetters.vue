<template>
  <div>
    <h4>1）state实例中的属性</h4>
    {{ str }}
    <h5>调用state实例中的$patch属性批量修改state中的数据</h5>
    <h6>有传入对象和回调函数两种</h6>
    <h6>如果是传入回调函数，则回调函数的参数就是state实例</h6>
    <div>{{ foo }}</div>
    <div>{{ count }}</div>
    <div>{{ arr }}</div>
    <button v-on:click="changeObj">在$patch中传入对象</button>
    <button v-on:click="changeFunc">在$patch中传入回调函数</button>
    <h4>2）把批量修改数据的操作放在state的actions中</h4>
    <h5>在actions中的方法里最好也可以使用$patch来批量修改数据</h5>
    <h5>actions中的方法可以自定义参数，由页面中传入实参</h5>
    <button v-on:click="changeAction">调用actions中的方法</button>

    <h4>3）关于getters的使用</h4>
    <h6>getters中的属性方法传入一个参数就是state，方法名就是新的state属性</h6>
    <h6>
      如果不传入参数，也可以使用this来调用当前实例，但是在ts环境下要手动指定方法返回值类型
    </h6>
    <h6>这里在模板中显示三次getters中的数据，但是控制台只显示调用了一次getters</h6>
    <h6>和computed的原理一样，也是存在一个缓存机制，如果关联的数据不变化，就不会调用</h6>
    <div>{{ count20 }}</div>
    <div>{{ count20 }}</div>
    <div>{{ count20 }}</div>
  </div>
  <br />
</template>

<script setup>
import useMainStore from "../../../store/index";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const mainStore = useMainStore();

const str = ref(
  Object.keys(mainStore)
    .map((item, index) => index + 1 + "." + item)
    .join(` `)
);

const { count } = storeToRefs(mainStore);
const { foo } = storeToRefs(mainStore);
const { arr } = storeToRefs(mainStore);

const changeObj = () => {
  mainStore.$patch({
    count: mainStore.count + 1,
    foo: "这里是修改后的数据",
    arr: [...mainStore.arr, 4], // 这样修改不是很方便
  });
};

const changeFunc = () => {
  mainStore.$patch((state) => {
    state.count++;
    state.foo = "这里是通过回调函数修改的数据";
    state.arr.push(4);
  });
};

const num = ref(5);
const changeAction = () => {
  mainStore.stateAction(num.value);
};

const { count20 } = storeToRefs(mainStore);
</script>

<style lang="scss" scoped>
button {
  margin-left: 10px;
  border: 1px solid black;
}
</style>

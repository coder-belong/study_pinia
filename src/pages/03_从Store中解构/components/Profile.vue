<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/userStore";
const userStore = useUserStore();

// ❌ store 解构出的 state 直接更改是没有响应式的，即视图不会发生更新，这就和直接解构 `props` 一样
// const { name, age, count } = userStore;
// name = "xxx"; // 视图不会触发更新，name 永远是 belong

// 可以直接从 store 中解构 action，调用 action 方法更新 state是响应式的
const { updateName } = userStore;
updateName("zystart");

// 从 store 中提取 state 属性时，需要使用storeToRefs为其保持响应式，更改属性时需要通过`value`方式更改
const { name, age, count } = storeToRefs(userStore);
name.value = "xxxx"; // 视图会触发更新

const changeSotreState = () => {
  // name = "xxx";
  name.value = "xxxxx";
  // updateName("zystart");
};
</script>

<template>
  <div id="profile">
    <h2>Profile组件，更新Pinia数据</h2>
    <p>Name: {{ userStore.name }}</p>
    <p>Count: {{ userStore.count }}</p>
    <button @click="changeSotreState">解构 store 更新state</button>
    <!-- <button @click="updateStoreName">Action 更新Name</button> -->
    <!-- <button @click="updateStoreCount">Action 更新Count</button> -->
  </div>
</template>

<style scoped>
#profile {
  border: 1px dashed #666;
  padding: 10px;
  margin-top: 16px;
}
</style>

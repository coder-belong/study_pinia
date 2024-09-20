<script lang="ts" setup>
import { useUserStore } from "../store/userStore";

// 获取Pinia的store实例
const userStore = useUserStore();
userStore.name = "kobe";
userStore.age = 24;

userStore.$patch({
  name: "kobe",
  age: 240,
  count: 100,
});

//  调用 action 方法 更新 store 中 state 数据
const updateStoreName = () => {
  userStore.updateName("zystart");
};

const updateStoreCount = () => {
  userStore.incrementCount();
};

const changeSotreState = () => {
  // 方式一：通过 store 实例.xxx 方式更新 state 数据
  // userStore.name = "kobe"
  // userStore.age = 24

  // 通过 store 上的 $reset() 方法，重置 state 数据
  // userStore.$reset()

  // 方式二：使用 store 的 $patch 方法批量更新 state数据
  userStore.$patch({
    name: "kobe",
    age: 240,
    count: 100,
  });

  // $patch 也可以接收一个函数来批量修改集合内部分对象的情况：
  userStore.$patch((state) => {
    state.name = "kobe";
    state.age = 240;
    state.count = 100;
  });

  // 方式三：调用 store 中的action方法来更新 state 数据
  userStore.updateName("zystart");
  userStore.incrementCount();
};
</script>

<template>
  <div id="profile">
    <h2>Profile组件，更新Pinia数据</h2>
    <p>Name: {{ userStore.name }}</p>
    <p>Count: {{ userStore.count }}</p>
    <button @click="changeSotreState">使用store实例更新state</button>
    <button @click="updateStoreName">更新Name</button>
    <button @click="updateStoreCount">更新Count</button>
  </div>
</template>

<style scoped>
#profile {
  border: 1px dashed #666;
  padding: 10px;
  margin-top: 16px;
}
</style>

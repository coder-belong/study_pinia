<script lang="ts" setup>
import { onMounted } from "vue";
import { useUserStore } from "../store/userStore";

const userStore = useUserStore();

// 在组件挂载时调用异步方法获取用户数据
onMounted(() => {
  userStore.fetchUserData();
});
</script>

<template>
  <div id="home">
    <h2>Home组件，展示Pinia数据</h2>
    <p>Name: {{ userStore.userData }}</p>
  </div>
</template>

<style scoped>
#home {
  border: 1px dashed #666;
  padding: 10px;
}
</style>

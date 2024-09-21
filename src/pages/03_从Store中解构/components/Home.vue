<script lang="ts" setup>
  import { useUserStore } from "../store/userStore";
  const userStore = useUserStore();
</script>

<template>
  <div id="home">
    <h2>Home组件，展示Pinia数据</h2>
    <p>Name: {{ userStore.name }}</p>
    <p>Age: {{ userStore.age }}</p>
    <p>Double Age: {{ userStore.doubleAge }}</p>
    <p>doublePlusOne: {{ userStore.doublePlusOne }}</p>
    <p>Count: {{ userStore.count }}</p>
  </div>
</template>

<style scoped>
  #home {
    border: 1px dashed #666;
    padding: 10px;
  }
</style>

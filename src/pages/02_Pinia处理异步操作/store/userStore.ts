import { defineStore } from "pinia";


export const useUserStore = defineStore('user', {
  state: () => ({
    userData: [],
  }),
  // action中的方法可以直接进行异步操作，并在异步操作过程中修改 state，无需再像 Vuex 那样使用dispatch和commit了
  actions: {
    async fetchUserData() {
      try {
        // 发起异步请求，将请求数据存储到 pinia 中
        const response = await fetch('http://localhost:3000/api/user/list');
        const res = await response.json();
        this.userData = res.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
  },
})
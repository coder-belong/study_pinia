import { defineStore } from "pinia";

//  Store 是使用 defineStore() 定义的，并且它需要一个唯一名称，作为第一个参数传递
export const useUserStore = defineStore("user", {
  // state：定义一个函数，并返回一个对象，用于存储 Pinia 状态
  state: () => ({
    name: "belong",
    age: 30,
    count: 0,
  }),
  // getters：定义一个对象，其内部方法用于计算 state 中的数据，内部方法返回的数据等同于 state 状态值，当依赖的数据发生变化时，getters 中的方法会重新执行
  getters: {
    doubleAge: (state) => state.age * 2,

    // 可以通过this来访问其他getters
    doublePlusOne(): number {
      return this.doubleAge + 1
    },
  },
  // actions：定义一个对象，其内部方法用于更新 state 中的数据
  actions: {
    updateName(newName: string) {
      console.log(this)
      this.name = newName
    },
    incrementCount() {
      this.count++
    }
  },
})
import { defineStore } from 'pinia';

export const testStore = defineStore('test', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      count: 0,
      collapse: false,//控制菜单收缩
    }
  },
  //计算属性
  getters: {
    countGetter(state) {
      return state.count += 10
    }
  },
  actions: {}
})

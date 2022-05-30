import { defineStore } from 'pinia'
import { testStore } from '@/stores/test'

const test = testStore();

export const cartStore = defineStore('cart', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    getCount(state) {
      return test.$state.num + state.count
    }
  },
  actions: {
    setCount(params: any) {
      this.count += params
    }
  }

})

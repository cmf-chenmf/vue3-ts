import { defineStore } from 'pinia';

export const mainStore = defineStore('main', {
	state: () => {
		return {
			count: 0,
			collapse:false,//控制菜单收缩
		}
	},
	getters: {
		countGetter(state) {
			return state.count += 10
		}
	},
	actions: {

	}
})
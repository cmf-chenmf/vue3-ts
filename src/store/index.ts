import { defineStore } from 'pinia';

export const mainStore = defineStore('main', {
	state: () => {
		return {
			count: 0
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
import axios from './http';

export class Data{
	static async getLists(){
		return axios.get('topics',{
			params:{
				"page":1,
				"limit":10
			}
		})
	}
}
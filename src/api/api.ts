import axios from './http';

/**
 * 暴露方法
 */
export class Data {
  static async getLists() {
    return axios.get('topics', {
      params: {
        "page": 1,
        "limit": 10
      }
    })
  }
  /**
   * 请求mock.js假数据，但baseUrl要先设置成空
   */
  // static async mockNews(){
  // 	return axios.get("/mock/news")
  // }
}
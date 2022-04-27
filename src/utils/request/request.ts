import axios from 'axios';

const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 1000 * 15,
});


/**
 * 请求拦截器
 */

instance.interceptors.request.use(config => {
	return config
}, error => {
	return Promise.reject(error)
})


/**
 * 相应拦截器
 */

instance.interceptors.response.use(res => {
	return Promise.resolve(res)
}, error => {
	return Promise.reject(error)
})


export default instance;
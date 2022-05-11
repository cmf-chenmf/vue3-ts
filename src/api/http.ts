import axios from 'axios';
import { showMessage } from './status';
import { ElMessage } from 'element-plus';

const instance = axios.create({
  timeout: 1000 * 15,//请求超时相应
  baseURL: 'https://cnodejs.org/api/v1/',//公共url
  // baseURL:"http://localhost:8088/api/v1/"
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})


instance.interceptors.response.use(res => {
  if (res.status === 200) {
    return Promise.resolve(res.data)
  }
}, error => {
  const { response } = error;

  if (response) {
    // 请求已发出，但是不在2xx的范围
    showMessage(response.status);           // 传入响应码，匹配响应码对应信息
    return Promise.reject(response.data);
  } else {
    ElMessage.warning('网络连接异常,请稍后再试!');
  }
})

export default instance
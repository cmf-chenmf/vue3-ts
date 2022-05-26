import axios from 'axios';
import { showMessage } from './status';
import { ElMessage } from 'element-plus';

const instance = axios.create({
  timeout: 1000 * 15,//请求超时响应
  baseURL: import.meta.env.VITE_APP_BASE_API,//公共url
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})


instance.interceptors.response.use(res => {
  //请求相应成功
  if (res.status === 200) {
    return Promise.resolve(res.data)
  }
}, error => {
  const {response} = error;
  
  if (response) {
    // 请求已返回，但是返回状态码不在2xx的范围
    showMessage(response.status);           // 传入响应码，匹配响应码对应信息
    return Promise.reject(response.data);
  } else {
    ElMessage.warning('网络连接异常,请稍后再试!');
  }
})

export default instance;

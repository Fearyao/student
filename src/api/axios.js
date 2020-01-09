/**
 * Created by gm on 2020/1/9.
 */





import axios from 'axios';
import qs from 'qs';
// 创建 axios 实例

const service = axios.create({
  baseURL: process.env.BASE_API,
  headers: {

  },
});

// 处理 request 和 response 信息
service.interceptors.request.use(
  config => {
    // if (sessionStorage.getItem('token')){
    //   config.headers['token'] = localStorage.getItem('token');
    // }
    return config;
  });
// response 拦截
service.interceptors.response.use((response) => {
  return response;
}, () => {

});

export default service;

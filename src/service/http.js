import axios from 'axios'
import {
  Message
} from 'element-ui'

const request = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  return response
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default request

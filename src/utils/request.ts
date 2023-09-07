// 二次封装axios
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'
import qs from 'qs'
import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    isReturnNativeData?: boolean
    errorMode?: string
    repeatRequest?: boolean
  }
}

const pendingMap = new Map()

function getRequestKey(config: AxiosRequestConfig) {
  return (config.method || '') + config.url + '?' + qs.stringify(config?.data)
}

function setPendingMap(config: AxiosRequestConfig) {
  const controller = new AbortController()
  config.signal = controller.signal
  const key = getRequestKey(config)
  if (pendingMap.has(key)) {
    pendingMap.get(key).abort()
    pendingMap.delete(key)
  } else {
    pendingMap.set(key, controller)
  }
}

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()

    if (userStore.token) {
      config.headers.token = userStore.token
    }
    if (!config.repeatRequest) {
      setPendingMap(config)
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    const config = response.config
    const key = getRequestKey(config)
    pendingMap.delete(key)
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  (error) => {
    let message = ''
    const status = error.response.status
    switch (status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        message = '未登录'
        break
      // 403 token过期
      // 登录过期对用户进行提示
      // 清除本地token和清空vuex中token对象
      // 跳转登录页面
      case 403:
        message = '登录过期，请重新登录'
        break
      case 404:
        message = '网络请求不存在'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = error.response.data.message
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

export default request

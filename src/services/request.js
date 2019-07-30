import axios from 'axios';
import { message } from 'antd'
import { BASE_URL } from '~utils/constant'
import { getDispatch } from '~/store/index'
import promiseBindDispatch from '~utils/promiseBindDispatch'
import { createHashHistory } from 'history';

const appKey = '' // 后端api 项目key

// axios 通用配置
const defaultConfigs = {
  baseURL: `${BASE_URL}`,
  timeout: 30000
}

const redirectUrl = '/'

const history = createHashHistory();

let timestamp = Math.round(new Date().getTime() / 1000)

const request = axios.create(defaultConfigs);
const requestWithToken = axios.create(defaultConfigs)

request.interceptors.request.use(config => {
  config.headers.Accept = 'application/json'
  if (!config.data) {
    config.data = {}
  }
  config.data.appKey = appKey
  config.data.timestamp = timestamp
  return config
});

requestWithToken.interceptors.request.use(async function (config) {
  config.headers.Accept = 'application/json'
  const dispatch = getDispatch()
  const promiseDispatch = promiseBindDispatch(dispatch)
  let accessToken = sessionStorage.getItem('accessToken');
  let expiresIn = sessionStorage.getItem('expiresIn');
  let refreshToken = sessionStorage.getItem('refreshToken');
  let lastFetchedTime = sessionStorage.getItem('lastFetchedTime');
  let tokenType = sessionStorage.getItem('tokenType');
  if (accessToken) {
    const timestamp = Math.round(new Date().getTime() / 1000)
    // // 判断token是否已过期 authStore.expiresIn
    // 添加5分钟的误差
    if (timestamp - lastFetchedTime > expiresIn - 300) { // 已过期
      if (timestamp - lastFetchedTime < 2592000) { // refreshToken 未过期
        // 同步刷新Token
        const newAuthData = await promiseDispatch({
          type: REFRESH_TOKEN,
          payload: {
            refreshToken: refreshToken
          }
        })
        config.headers.Authorization = `${newAuthData.tokenType} ${newAuthData.accessToken}`
      } else {
        history.replace(redirectUrl)
      }
    } else { // token 未过期
      config.headers.Authorization = `${tokenType} ${accessToken}`
    }
  } else {
    history.replace(redirectUrl)
  }
  if (!config.data) {
    config.data = {}
  }
  config.data.appKey = appKey
  config.data.timestamp = timestamp
  return config
})

const responseInterceptor = response => {
  const { code, data } = response
  if (code >= 200 && code < 500) {
    return Promise.resolve(data)
  } else {
    message.destroy()
    message.error(data && data.message || '服务器错误')
    return Promise.reject(response)
  }
}

request.interceptors.response.use(responseInterceptor);
requestWithToken.interceptors.response.use(responseInterceptor);




export default request;

export {
  request,
  requestWithToken,
}
import axios from 'axios'
import $ from 'jquery'

const axiosAjax = function(config) {
  // TODO 配置请求根域名
  // var apiUri = config ? config.apiUrl : null
  // if (!apiUri) {
  //   return false
  // }
  // if (apiUri.lastIndexOf('/') !== apiUri.length - 1 && config.url.indexOf('/') !== 0) {
  //   apiUri += '/'
  // }
  var headers = {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8;'
  }
  if (config.header) {
    headers = Object.assign(headers, config.header)
  }
  return axios({
    // url: apiUri + config.url,
    url: config.url,
    method: config.method || 'post',
    responseType: 'json',
    headers: headers,
    withCredentials: true,
    params: config.params || {},
    data: config.data || {},
    timeout: 10000
  })
}

export function login(params) {
  const config = {
    url: 'http://192.168.0.106:8871/login/check',
    // url: 'http://192.168.0.101:8876/api/wms_power/login/wmsLogIn',
    method: 'post',
    data: $.param(params)
  }
  return axiosAjax(config)
}

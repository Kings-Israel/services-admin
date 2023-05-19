import Vue from 'vue'

// axios
import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://services.test/api' : 'http://172.104.245.14/services-app/api'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.$http = axiosIns

export default axiosIns

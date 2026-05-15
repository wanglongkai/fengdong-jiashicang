import axios from 'axios'

const request = axios.create({
  baseURL: '/county-dashboard',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

request.interceptors.response.use(
  (response) => {
    const { code, msg, data } = response.data
    if (code === 200) {
      return data
    }
    return Promise.reject(new Error(msg || `请求失败，状态码: ${code}`))
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default request

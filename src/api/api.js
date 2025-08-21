import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error('API Error:', err)
    return Promise.reject(err)
  }
)

export default api

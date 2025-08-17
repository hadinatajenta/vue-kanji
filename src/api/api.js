import axios from "axios";

const api = axios.create({
    baseURL :'https://kanjiapi.dev/v1',
    timeout : 10000
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization =  `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default api
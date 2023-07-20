import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'

class Http {
  instance: AxiosInstance
  private token: string
  constructor() {
    this.token = localStorage.getItem('Token') as string
    this.instance = axios.create({
      baseURL: '',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.token) {
          config.headers.Authorization = 'Bearer ' + this.token
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          console.log('message::', message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http

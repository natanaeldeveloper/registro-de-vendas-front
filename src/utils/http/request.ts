import type { ApiResponseError } from '@/shared/interfaces'
import { useModalFeedbackStore } from '@/stores/modalFeedback'
import axios, { AxiosError, type AxiosResponse } from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.code === 'ERR_NETWORK') {
      const modalFeedback = useModalFeedbackStore()
      modalFeedback.showModal('ERR_NETWORK', {
        title: 'Erro do servidor',
        message: 'Não foi possível estabelecer uma conexão com o servidor.'
      })
    }

    if (error.status === 400) {
      const modalFeedback = useModalFeedbackStore()
      const data = error.response?.data as ApiResponseError
      modalFeedback.showModal('ERROR', {
        title: data.error,
        message: data.message
      })
    }

    return Promise.reject(error)
  }
)

export default httpClient

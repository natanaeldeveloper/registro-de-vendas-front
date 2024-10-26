export interface ApiResponse<T> {
  data: T
}

export interface ApiResponseSuccess<T> {
  data: T
  statusCode: number
  success?: string
  message: string | object
}

export interface ApiResponseError {
  error: string
  message: string | object
  path: string
  statusCode: number
  timestamp: Date
}

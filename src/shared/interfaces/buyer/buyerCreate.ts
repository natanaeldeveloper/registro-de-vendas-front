import type { ApiResponse } from '../apiResponse'

export interface BuyerCreateBody {
  firstName: string
  lastName: string
  email: string
}

export type BuyerCreateResponse = ApiResponse<{
  id: number
  firstName: string
  lastName: string
  email: string
}>

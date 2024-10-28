import type { ApiResponseSuccess } from '../apiResponse'
import type { CashierItem } from './item'

export type CreateCashierBody = {
  name: string
  description: string | null
  reference_date: Date
  initial_cash: number
  future_payment: boolean
  payment_methods: string[]
  pix_key: string
  pix_recipient: string
  stand_id: string
  products_stock: {
    product_id: string
    count: number
  }[]
}

export type CreateCashierResponse = ApiResponseSuccess<CashierItem>

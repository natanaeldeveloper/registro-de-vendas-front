import type { ApiResponseSuccess } from '../apiResponse'
import type { ProductItem } from './item'

export type CreateProductBody = {
  name: string
  description: string | null
  reference_date: Date | null
  initial_cash: number
  future_payment: boolean
  payment_methods: string[]
  pix_key: string
  pix_recipient: string
  products_stock: {
    product_id: string
    count: number
  }[]
}

export type CreateProductResponse = ApiResponseSuccess<ProductItem>

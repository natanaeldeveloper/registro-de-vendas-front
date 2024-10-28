export interface CashierItem {
  id: string
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

export interface BuyerCreateBody {
  firstName: string
  lastName: string
  email: string
}

export interface BuyerCreateResponse {
  id: number
  firstName: string
  lastName: string
  email: string
}

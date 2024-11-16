import { type BuyerCreateResponse, type BuyerCreateBody } from '@/shared/interfaces'
import httpClient from '@/utils/http/request'

export class BuyerService {
  async register(body: BuyerCreateBody) {
    const res = await httpClient.post<BuyerCreateResponse>('buyers', body)
    return res.data
  }
}

export const buyerService = new BuyerService()

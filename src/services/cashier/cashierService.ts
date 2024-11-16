import type {
  CreateCashierBody,
  CreateCashierResponse,
  FindCashierByIdResponse,
  GetCashierAllResponse
} from '@/shared/interfaces/cashier'
import httpClient from '@/utils/http/request'

export default class CashierService {
  async getAll(standId: string) {
    const res = await httpClient.get<GetCashierAllResponse>(`stands/${standId}/cashiers`)
    return res.data
  }

  async create(body: CreateCashierBody, standId: string) {
    body = { ...body, future_payment: true, initial_cash: body.initial_cash ?? 0 }
    const res = await httpClient.post<CreateCashierResponse>(`stands/${standId}/cashiers`, body)
    return res.data
  }

  async findById(id: string) {
    const res = await httpClient.get<FindCashierByIdResponse>(`stands/${id}`)
    return res.data
  }
}

export const cashierService = new CashierService()

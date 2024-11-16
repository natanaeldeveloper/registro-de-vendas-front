import type {
  CreateProductBody,
  CreateProductResponse,
  FindProductByIdResponse,
  GetProductAllResponse
} from '@/shared/interfaces'
import httpClient from '@/utils/http/request'

export default class ProductService {
  async getAll(standId: string) {
    const res = await httpClient.get<GetProductAllResponse>(`stands/${standId}/products`)
    return res.data
  }

  async create(body: CreateProductBody, standId: string) {
    body = { ...body, future_payment: true, initial_cash: body.initial_cash ?? 0 }
    const res = await httpClient.post<CreateProductResponse>(`stands/${standId}/products`, body)
    return res.data
  }

  async findById(id: string) {
    const res = await httpClient.get<FindProductByIdResponse>(`stands/${id}`)
    return res.data
  }
}

export const productService = new ProductService()

import {
  type CreateStandResponse,
  type CreateStandBody,
  type FindStandByIdResponse
} from '@/shared/interfaces/stand'
import type { GetStandAllResponse } from '@/shared/interfaces/stand/getAll'
import httpClient from '@/utils/http/request'

export default class StandService {
  async getAll() {
    const res = await httpClient.get<GetStandAllResponse>('stands')
    return res.data
  }

  async create(body: CreateStandBody) {
    const res = await httpClient.post<CreateStandResponse>('stands', body)
    return res.data
  }

  async findById(id: string) {
    const res = await httpClient.get<FindStandByIdResponse>(`stands/${id}`)
    return res.data
  }
}

export const standService = new StandService()

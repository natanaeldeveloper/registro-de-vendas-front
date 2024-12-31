import {
  type CreateStandBody,
  type CreateStandResponse,
  type FindStandByIdResponse,
  type GetStandAllResponse,
  type StandItem,
  type UpdateStandBody
} from '@/shared/interfaces/stand'
import type { UpdateStandResponse } from '@/shared/interfaces/stand/update'
import httpClient from '@/utils/http/request'

export default class StandService {
  async getAll(): Promise<{ data: StandItem[] }> {
    const res = await httpClient.get<GetStandAllResponse>('stands')
    return res.data
  }

  async create(body: CreateStandBody) {
    const res = await httpClient.post<CreateStandResponse>('stands', body)
    return res.data
  }

  async update(id: string, body: UpdateStandBody) {
    const res = await httpClient.put<UpdateStandResponse>(`stands/${id}`, body)
    return res.data
  }

  async findById(id: string) {
    const res = await httpClient.get<FindStandByIdResponse>(`stands/${id}`)
    return res.data
  }

  async delete(id: string) {
    const res = await httpClient.delete<any>(`stands/${id}`)
    return res.data
  }
}

export const standService = new StandService()

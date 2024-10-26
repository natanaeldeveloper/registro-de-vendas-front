import { type CreateStandResponse, type CreateStandBody } from '@/shared/interfaces/stand'
import type { GetStandAllResponse } from '@/shared/interfaces/stand/getStandAll'
import httpClient from '@/utils/http/request'

export default class StandService {
  async getAll() {
    const res = await httpClient.get<GetStandAllResponse>('stands')
    return res.data.data
  }

  async create(body: CreateStandBody) {
    const res = await httpClient.post<CreateStandResponse>('stands', body)
    return res.data
  }
}

export const standService = new StandService()

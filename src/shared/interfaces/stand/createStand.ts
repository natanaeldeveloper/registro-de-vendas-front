import type { ApiResponseSuccess } from '../apiResponse'
import type { StandItem } from './item'

export type CreateStandBody = {
  name: string
  color: string
}

export type CreateStandResponse = ApiResponseSuccess<StandItem>

import type { ApiResponseSuccess } from '../apiResponse'
import type { StandItem } from './item'

export type UpdateStandBody = {
  name: string
  color: string
}

export type UpdateStandResponse = ApiResponseSuccess<StandItem>

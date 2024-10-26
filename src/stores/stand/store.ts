import type { CreateStandBody, StandItem } from '@/shared/interfaces/stand'
import { standService } from '@/shared/services/stand/standService'
import { defineStore } from 'pinia'

export const useStandStore = defineStore('stands', {
  state: () => ({
    standList: [] as StandItem[]
  }),
  actions: {
    async getAll() {
      const res = await standService.getAll()
      this.standList = res.data
    },
    async create(body: CreateStandBody) {
      const res = await standService.create(body)
      this.standList.push(res.data)
    }
  }
})

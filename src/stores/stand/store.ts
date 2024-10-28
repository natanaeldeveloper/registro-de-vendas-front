import type { CreateStandBody, StandItem } from '@/shared/interfaces/stand'
import { defineStore } from 'pinia'

export const useStandStore = defineStore('stands', {
  state: () => ({
    standList: [] as StandItem[],
    currentStand: null as StandItem | null
  }),
  actions: {
    async getAll() {
      // const res = await standService.getAll()
      // this.standList = res.data
      this.standList = [
        {
          id: '1',
          name: 'Banca de cachorro-quente',
          color: 'error'
        },
        {
          id: '2',
          name: 'Vendas EBD',
          color: 'primary'
        }
      ]
    },
    async create(body: CreateStandBody) {
      // const res = await standService.create(body)
      // this.standList.push(res.data)
      const stand: StandItem = {
        id: `${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}`,
        name: body.name,
        color: body.color
      }
      this.standList.push(stand)
    },
    async findCurrentStandById(id: string) {
      // const res = await standService.findById(id)
      // this.currentStand = res.data
      this.currentStand = this.standList.find((item) => item.id === id) ?? null
    },
    resetData() {
      this.currentStand = null
    }
  }
})

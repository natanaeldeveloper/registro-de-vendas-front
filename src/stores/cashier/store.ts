import type { CashierItem, CreateCashierBody } from '@/shared/interfaces/cashier'
import { cashierService } from '@/services/cashier/cashierService'
import { defineStore } from 'pinia'

export const useCashierStore = defineStore('cashiers', {
  state: () => ({
    cashierList: [] as CashierItem[],
    currentCashier: null as CashierItem | null
  }),
  actions: {
    async getAll(standId: string) {
      const res = await cashierService.getAll(standId)
      this.cashierList = res.data
    },
    async create(body: CreateCashierBody, standId: string) {
      const res = await cashierService.create(body, standId)
      this.cashierList.push(res.data)
    },
    async findCurrentCashierById(id: string) {
      this.currentCashier = this.cashierList.find((item) => item.id === id) ?? null
    },
    reset() {
      this.currentCashier = null
      this.cashierList = []
    }
  }
})

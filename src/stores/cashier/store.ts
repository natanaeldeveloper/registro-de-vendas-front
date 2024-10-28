import type { CashierItem, CreateCashierBody } from '@/shared/interfaces/cashier'
import { defineStore } from 'pinia'

export const useCashierStore = defineStore('cashiers', {
  state: () => ({
    cashierList: [] as CashierItem[],
    currentCashier: null as CashierItem | null
  }),
  actions: {
    async getAll(standId: string) {
      this.cashierList = [
        {
          id: '1',
          name: 'Manhã',
          description: '',
          reference_date: new Date(),
          initial_cash: 100.0,
          future_payment: true,
          payment_methods: ['pix', 'cash'],
          pix_key: '12345678900',
          pix_recipient: 'John Doe',
          stand_id: standId,
          products_stock: [
            {
              product_id: '2',
              count: 1
            },
            {
              product_id: '2',
              count: 2
            }
          ]
        }
      ]
    },
    async create(body: CreateCashierBody) {
      const cashier: CashierItem = {
        id: `${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}`,
        ...body
      }
      this.cashierList.push(cashier)
    },
    async findCurrentCashierById(id: string) {
      this.currentCashier = this.cashierList.find((item) => item.id === id) ?? null
    },
    resetData() {
      this.currentCashier = null
    }
  }
})

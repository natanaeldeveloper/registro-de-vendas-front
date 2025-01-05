import type { SessionStorageKeys } from '@/shared/interfaces'

export class LocalStorageService {
  private storage: Storage

  constructor() {
    this.storage = localStorage
  }

  setItem<K extends keyof SessionStorageKeys>(key: K, value: SessionStorageKeys[K]): void {
    const serializedValue = JSON.stringify(value)
    this.storage.setItem(key, serializedValue)
  }

  getItem<K extends keyof SessionStorageKeys>(key: K): SessionStorageKeys[K] | null {
    const item = this.storage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  removeItem<K extends keyof SessionStorageKeys>(key: K): void {
    this.storage.removeItem(key)
  }

  clear(): void {
    this.storage.clear()
  }

  hasItem<K extends keyof SessionStorageKeys>(key: K): boolean {
    return this.storage.getItem(key) !== null
  }
}

export const localStorageService = new LocalStorageService()

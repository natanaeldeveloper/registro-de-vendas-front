export class BrowserStorageService {
  private storage: Storage

  constructor(useSessionStorage: boolean = false) {
    this.storage = useSessionStorage ? sessionStorage : localStorage
  }

  setItem(key: string, value: any): void {
    const serializedValue = JSON.stringify(value)
    this.storage.setItem(key, serializedValue)
  }

  getItem<T>(key: string): T | null {
    const item = this.storage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  clear(): void {
    this.storage.clear()
  }

  hasItem(key: string): boolean {
    return this.storage.getItem(key) !== null
  }
}

export const sessionStorageService = new BrowserStorageService(true)

export const localStorageService = new BrowserStorageService(false)

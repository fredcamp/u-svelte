import type { Writable } from 'svelte/store'

export interface Alert {
  show: boolean
  text: string
  type: 'success' | 'danger'
}

export interface AlertStore {
  subscribe: Writable<Alert>['subscribe']
  toggleItem: (key: string, value: unknown) => void
}

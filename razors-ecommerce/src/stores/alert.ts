import { writable } from 'svelte/store'
import type { Alert, AlertStore } from '../types/alert.type'

let alert = createStore({ show: false, text: '', type: 'success' })

function createStore({ show, text, type }: Alert): AlertStore {
  const { subscribe, update } = writable({ show, text, type })

  return {
    subscribe,
    toggleItem: (key: string, value: unknown) => {
      update((currentValues) => {
        return { ...currentValues, [key]: value }
      })
    },
  }
}

export default alert

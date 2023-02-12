import { writable } from 'svelte/store'
import type { User, UserStore } from '../types/user.type'
import { getStorageUser, setStorageUser } from './localStorage'

let user = createUserStore(getStorageUser())

function createUserStore(initial: User): UserStore {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set: (value: User) => {
      setStorageUser(value)
      set(value)
    },
  }
}

export function logoutUser(): void {
  user.set({ jwt: null, username: null })
  localStorage.clear()
}

export default user

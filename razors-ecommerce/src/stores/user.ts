import { writable } from 'svelte/store'
import type { User, UserStore } from '../types/user.type'

let user = createUserStore({ username: 'fred', jwt: '' })

function createUserStore(initial: User): UserStore {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set,
  }
}

export default user

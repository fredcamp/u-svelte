import type { Writable } from 'svelte/store'

export interface User {
  username: string
  jwt: string
}

export interface UserStore {
  subscribe: Writable<User>['subscribe']
  set: Writable<User>['set']
}

import type { Writable } from 'svelte/store'

export interface User {
  username: string
  jwt: string
}

export interface UserStore {
  subscribe: Writable<User>['subscribe']
  set: Writable<User>['set']
}

export interface UserStrapi {
  jwt: string
  user: {
    username: string
    email: string
    blocked: boolean
    confirmed: boolean
  }
  error: {
    message: string
  }
}

import type { Writable } from 'svelte/store'

export interface NavStore {
  subscribe: Writable<boolean>['subscribe']
  set: Writable<boolean>['set']
}

import { writable } from 'svelte/store'
import type { NavStore } from '../types/navstore.type'

function createStore(initial: boolean): NavStore {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set: function (value: boolean) {
      if (value) {
        document.body.classList.add('overflow-y-hidden')
      } else {
        document.body.classList.remove('overflow-y-hidden')
      }
      set(value)
    },
  }
}

export let show = createStore(false)

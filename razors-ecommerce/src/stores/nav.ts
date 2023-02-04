import { writable } from 'svelte/store'
import type { NavStore } from '../types/navstore.type'

let show = createStore(false)

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

function getProps({ href, isPartiallyCurrent, isCurrent }): {
  class?: string
} {
  const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent

  if (isActive) {
    return {
      class:
        'relative capitalize px-2 after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:bg-primary-dark after:transition-all after:origin-center',
    }
  }
  return {
    class:
      'relative capitalize px-2 after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-right after:scale-x-0 after:bg-primary-dark after:transition-transform after:hover:origin-left hover:after:scale-x-100 after:duration-300',
  }
}

export { show, getProps }

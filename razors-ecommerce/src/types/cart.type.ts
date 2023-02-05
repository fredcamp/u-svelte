import type { Writable } from 'svelte/store'

interface Cart {
  id: number
  title: string
  price: number
  image: string
  amount: number
}

interface CartShow {
  subscribe: Writable<boolean>['subscribe']
  set: Writable<boolean>['set']
}

export type { Cart, CartShow }

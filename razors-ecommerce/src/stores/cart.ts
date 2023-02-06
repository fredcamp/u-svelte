import { writable, derived } from 'svelte/store'
import type { Cart, CartShow, CartStore } from '../types/cart.type'
// import localCart from '../data/localCart'
import { getStorageCart, setStorageCart } from './localStorage'

let show = createShowStore(false)

function createShowStore(initial: boolean): CartShow {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set: (value: boolean) => {
      if (value) {
        document.body.classList.add('overflow-y-hidden')
      } else {
        document.body.classList.remove('overflow-y-hidden')
      }
      set(value)
    },
  }
}

let cartItems = createCartStore(getStorageCart())

function createCartStore(initial: Cart[]): CartStore {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set: (value: Cart[]) => {
      setStorageCart(value)
      set(value)
    },
  }
}

const totalQuantity = derived(cartItems, ($cartItems) =>
  $cartItems.reduce((acc, curr) => acc + curr.amount, 0)
)

const totalPrice = derived(cartItems, ($cartItems) =>
  $cartItems.reduce((acc, curr) => acc + curr.amount * curr.price, 0)
)

export { show, cartItems, totalQuantity, totalPrice }

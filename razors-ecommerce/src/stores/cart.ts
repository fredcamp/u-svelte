import { writable, derived } from 'svelte/store'
import type { Cart, CartShow } from '../types/cart.type'
import localCart from '../data/localCart'

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

let cartItems = writable<Cart[]>(localCart)

const totalQuantity = derived(cartItems, ($cartItems) =>
  $cartItems.reduce((acc, curr) => acc + curr.amount, 0)
)

const totalPrice = derived(cartItems, ($cartItems) =>
  $cartItems.reduce((acc, curr) => acc + curr.amount * curr.price, 0)
)

export { show, cartItems, totalQuantity, totalPrice }

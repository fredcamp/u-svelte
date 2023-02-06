import type { Cart } from '../types/cart.type'

function getStorageCart(): Cart[] {
  const cart = JSON.parse(localStorage.getItem('cart'))
  return cart?.length > 0 ? cart : []
}

function setStorageCart(cart: Cart[]): void {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export { getStorageCart, setStorageCart }

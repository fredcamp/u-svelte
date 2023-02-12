import type { Cart } from '../types/cart.type'
import type { User } from '../types/user.type'

function getStorageCart(): Cart[] {
  const cart = JSON.parse(localStorage.getItem('cart'))
  return cart?.length > 0 ? cart : []
}

function setStorageCart(cart: Cart[]): void {
  localStorage.setItem('cart', JSON.stringify(cart))
}

function getStorageUser(): User {
  const user = JSON.parse(localStorage.getItem('user'))
  return user ?? { username: null, jwt: null }
}

function setStorageUser(user: User): void {
  localStorage.setItem('user', JSON.stringify(user))
}

export { getStorageCart, setStorageCart, getStorageUser, setStorageUser }

import type { Cart } from './cart.type'

export interface Order {
  name: string
  address: string
  total: number
  items: Cart[]
  stripeToken: string
  userToken: string
}

export interface OrderStrapi {
  status: number
  message: string
}

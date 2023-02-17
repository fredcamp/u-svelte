import url from './url'
import type { Order, OrderStrapi } from '../types/order.type'

async function createOrder({
  name,
  address,
  total,
  items,
  stripeToken,
  userToken,
}: Order): Promise<OrderStrapi> {
  try {
    const response = await fetch(`${url}/api/orders`, {
      method: 'POST',
      body: JSON.stringify({
        data: { name, address, total, items, stripeToken },
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })

    if (!response.ok) {
      const data = await response.json()
      return {
        status: data.error.status,
        message: data.error.message,
      }
    }

    return {
      status: response.status,
      message: 'Order Checkout was successfully processed.',
    }
  } catch (error) {
    console.log(error)
  }
}

export default createOrder

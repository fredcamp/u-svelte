import url from './url'
import type { Order } from '../types/order.type'

async function createOrder({
  name,
  address,
  total,
  items,
  stripeToken,
  userToken,
}: Order): Promise<void> {
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

    console.log(response)

    if (!response.ok) {
      const error = await response.json()
      console.log(error)
    }

    // const data = await response.json()
    // // return data
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export default createOrder

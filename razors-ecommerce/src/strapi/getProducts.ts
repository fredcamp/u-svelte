import type { Product } from '../types/product.type'
import url from './url'

function parseProducts(data: any[]): Product[] {
  const product = data.map((item) => {
    const {
      id,
      attributes: { title, price, description, featured, image },
    } = item

    return {
      id,
      title,
      price,
      description,
      featured,
      image: url + image.data.attributes.url,
    }
  })

  return product
}

export default async function (): Promise<Product[] | never> {
  try {
    const response = await fetch(`${url}/api/products?populate=*`)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const { data } = await response.json()
    return parseProducts(data)
  } catch (error) {
    console.log(error.message)
  }
}

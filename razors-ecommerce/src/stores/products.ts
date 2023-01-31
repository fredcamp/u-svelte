import { writable } from 'svelte/store'
import localProducts from '../data/localProducts'
import type { Product } from '../types/product.type'

function flattenProducts(products: any[]): Product[] {
  return products.map((item) => {
    const image = item.image.url

    return { ...item, image }
  })
}

export default writable<Product[]>(flattenProducts(localProducts))

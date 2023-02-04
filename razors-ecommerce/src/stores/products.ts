import { writable, derived } from 'svelte/store'
import localProducts from '../data/localProducts'
import type { Product } from '../types/product.type'

let products = writable<Product[]>(flattenProducts(localProducts))

function flattenProducts(products: any[]): Product[] {
  return products.map((item) => {
    const image = item.image.url

    return { ...item, image }
  })
}

export const featuredProducts = derived(products, ($products) =>
  $products.filter((item) => item.featured)
)

export default products

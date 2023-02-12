import { writable, derived } from 'svelte/store'
import type { Product } from '../types/product.type'
import getProducts from '../strapi/getProducts'

let products = writable<Product[]>([], () => {
  setProducts()
  return () => {}
})

async function setProducts() {
  const data = await getProducts()
  products.set(data)
}

export const featuredProducts = derived(products, ($products) =>
  $products.filter((item) => item.featured)
)

export default products

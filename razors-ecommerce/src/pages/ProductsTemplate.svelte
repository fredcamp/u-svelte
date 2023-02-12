<script lang="ts">
  import { onMount } from 'svelte'
  import { derived, type Readable } from 'svelte/store'
  import { fade } from 'svelte/transition'
  import { link } from 'svelte-routing'
  import type { Product } from '../types/product.type'
  import Main from '../components/Main.svelte'
  import Button from '../components/Button.svelte'
  import Loading from '../components/Loading.svelte'
  import products from '../stores/products'
  import { cartItems, show } from '../stores/cart'
  import { amountParser } from '../utils/parser'
  import capitalize from '../utils/capitalize'

  export let id: number

  let product: Readable<Product>
  let timeoutId: NodeJS.Timeout

  onMount(() => {
    timeoutId = setTimeout(() => {
      product = derived(products, ($products) =>
        $products.find((item) => item.id === Number(id))
      )
    }, 1000)

    return () => clearTimeout(timeoutId)
  })

  function onClick(): void {
    const productExistInCart = $cartItems.find(
      (item) => item.id === $product.id
    )

    if (productExistInCart) {
      $cartItems = $cartItems.map((item) => {
        return item.id === Number(id)
          ? { ...item, amount: item.amount + 1 }
          : item
      })
    } else {
      const { id, image, price, title } = $product
      $cartItems = [...$cartItems, { id, image, price, title, amount: 1 }]
    }

    $show = true
  }
</script>

<svelte:head>
  <title>Razors | {$product ? capitalize($product.title) : 'Product'}</title>
</svelte:head>

<Main class="mt-28 px-6 lg:mx-auto lg:max-w-screen-lg">
  {#if $product}
    <a
      href="/products"
      class="bg-primary-light focus:ring-primary-light group inline-block rounded-full px-5 py-3 text-sm text-black shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
      use:link
      ><i
        class="fas fa-arrow-left text-primary-dark mr-2 tracking-wider transition-transform group-hover:-translate-x-1 "
      /> Back to Products</a
    >

    <section class="mt-16" in:fade>
      <div class="grid gap-4 md:grid-cols-2">
        <img
          src={$product.image}
          alt={$product.title}
          class="mx-auto max-h-72 max-w-full self-center"
        />
        <div class="space-y-5">
          <h2 class="text-3xl font-semibold capitalize tracking-widest">
            {$product.title}
          </h2>
          <p class="text-primary-dark font-serif text-xl tracking-widest">
            {amountParser($product.price)}
          </p>
          <p>{$product.description}</p>
          <Button
            class="bg-primary-dark hover:bg-primary focus:ring-primary !mt-10 w-full rounded-full p-3 text-sm tracking-wider text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            on:click={onClick}
            >Add to Cart <i class="fas fa-shopping-basket ml-1" /></Button
          >
        </div>
      </div>
    </section>
  {:else}
    <Loading height={420} />
  {/if}
</Main>

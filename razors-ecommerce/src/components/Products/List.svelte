<script lang="ts">
  import { onMount } from 'svelte'
  import type { Product } from '../../types/product.type'
  import productStore from '../../stores/products'
  import Card from './Card.svelte'
  import Loading from '../Loading.svelte'

  export let title: string

  let products: Product[] = []
  let timeoutId: NodeJS.Timeout

  onMount(() => {
    timeoutId = setTimeout(() => {
      products = $productStore
    }, 500)

    return () => clearTimeout(timeoutId)
  })
</script>

<h2 class="text-center text-2xl font-semibold">{title}</h2>

<section class="mt-10">
  <ul class="xs:grid-cols-2 grid gap-10 sm:grid-cols-3 md:grid-cols-4">
    {#each products as product (product.id)}
      <li>
        <Card {...product} />
      </li>
    {:else}
      <Loading height={380} />
    {/each}
  </ul>
</section>

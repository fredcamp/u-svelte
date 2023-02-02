<script lang="ts">
  import products from '../../stores/products'
  import Card from './Card.svelte'
  import Loading from '../Loading.svelte'

  export let title: string
</script>

<h2 class="text-center text-2xl font-semibold">{title}</h2>

<div class="mt-10">
  <ul class="xs:grid-cols-2 grid gap-10 sm:grid-cols-3 md:grid-cols-4">
    {#each $products as product (product.id)}
      <li>
        <Card {...product} />
      </li>
    {:else}
      <Loading />
    {/each}
  </ul>
</div>

<script lang="ts">
  import products from '../../stores/products'
  import Card from './Card.svelte'
  import loading from '../../assets/images/loading.svg'

  export let title: string
</script>

<h2 class="text-center text-2xl font-semibold">{title}</h2>

<div class="mt-10">
  <ul class="xs:grid-cols-2 grid gap-10 sm:grid-cols-3">
    {#each $products as product (product.id)}
      <li>
        <Card {...product} />
      </li>
    {:else}
      <div class="relative col-[1/-1] flex items-center justify-center">
        <p class="absolute font-semibold tracking-widest text-white">
          Loading...
        </p>
        <img src={loading} alt="loading" class="h-80" />
      </div>
    {/each}
  </ul>
</div>

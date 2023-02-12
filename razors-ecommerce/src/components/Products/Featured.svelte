<script lang="ts">
  import Card from './Card.svelte'
  import Loading from '../Loading.svelte'
  import { featuredProducts } from '../../stores/products'
</script>

<section class="mt-14">
  <h2 class="text-center text-2xl font-semibold">Featured Products</h2>

  <ul
    class="xs:w-[80%] mx-auto mt-8 grid w-[90%] gap-8 sm:w-[90%] sm:grid-cols-2 md:w-full md:grid-cols-4 md:gap-4"
  >
    {#each $featuredProducts as product}
      <li>
        <Card {...product} />
      </li>
    {:else}
      <Loading height={280} />
    {/each}
  </ul>
</section>

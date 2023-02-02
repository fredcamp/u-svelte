<script lang="ts">
  import { link } from 'svelte-routing'
  import Hero from '../components/Hero.svelte'
  import Card from '../components/Products/Card.svelte'
  import products from '../stores/products'
  import backToTop from '../utils/backToTop'

  const featuredProducts = $products.filter((item) => item.featured)
</script>

<svelte:head>
  <title>Razors | Home</title>
</svelte:head>

<Hero>
  <a
    href="/products"
    class="bg-primary-light focus:ring-primary-light group rounded-full py-3 px-8 text-slate-900 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800"
    on:click={backToTop}
    use:link
    >Shop Now <i
      class="fas fa-arrow-right text-primary-dark ml-2 transition-transform group-hover:translate-x-2"
    />
  </a>
</Hero>

<main class="px-6 lg:mx-auto lg:max-w-screen-lg">
  <section class="mt-14">
    <h2 class="text-center text-2xl font-semibold">Featured Products</h2>

    <ul
      class="xs:mx-auto xs:w-[80%] mt-8 grid gap-8 sm:w-[90%] sm:grid-cols-2 md:w-full md:grid-cols-4 md:gap-4"
    >
      {#each featuredProducts as product}
        <li>
          <Card {...product} />
        </li>
      {/each}
    </ul>
  </section>
</main>

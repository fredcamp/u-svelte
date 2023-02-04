<script lang="ts">
  import { link } from 'svelte-routing'
  import Hero from '../components/Hero.svelte'
  import Main from '../components/Main.svelte'
  import Featured from '../components/Products/Featured.svelte'
  import backToTop from '../utils/backToTop'
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

<Main class="px-6 lg:mx-auto lg:max-w-screen-lg">
  <Featured />
</Main>

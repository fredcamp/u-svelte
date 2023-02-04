<script lang="ts">
  import { link } from 'svelte-routing'
  import { fly } from 'svelte/transition'
  import { amountParser } from '../../utils/parser'
  import backToTop from '../../utils/backToTop'

  export let id: number
  export let title: string
  export let price: number
  export let image: string

  let show = false

  function toggleShow(): void {
    show = !show
  }
</script>

<article
  class="bg-primary-light/40 border-primary/40 relative grid h-full cursor-pointer overflow-hidden rounded-md border-2 shadow-md"
  on:mouseenter={toggleShow}
  on:mouseleave={toggleShow}
>
  <div class="self-center py-4 px-6">
    <img src="/src{image}" alt={title} class="mx-auto max-h-40 max-w-full" />
    <footer class="flex flex-col items-center justify-center gap-1">
      <h3 class="mt-4 text-center capitalize">{title}</h3>
      <p
        class="text-primary-dark text-center font-serif text-sm tracking-widest"
      >
        {amountParser(price)}
      </p>
    </footer>

    {#if show}
      <div
        class="absolute inset-0 grid place-items-center bg-black/60"
        in:fly={{ y: 200, duration: 500 }}
        out:fly={{ y: -200, duration: 500 }}
      >
        <a
          href="/products/{id}"
          on:click={backToTop}
          use:link
          class="bg-primary-dark hover:bg-primary focus:ring-primary rounded-full px-6 py-2  tracking-wider text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/40"
          >Details</a
        >
      </div>
    {/if}
  </div>
</article>

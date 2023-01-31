<script lang="ts">
  import { link } from 'svelte-routing'
  import { fly } from 'svelte/transition'

  export let id: number
  export let title: string
  export let price: number
  export let description: string
  export let featured: boolean
  export let image: string

  let show = false

  function toggleShow(): void {
    show = !show
  }
</script>

<article
  class="bg-primary-light/40 border-primary/40 relative h-full cursor-pointer overflow-hidden rounded-md border-2 shadow-md"
  on:mouseenter={toggleShow}
  on:mouseleave={toggleShow}
>
  <div class="py-4 px-6">
    <img src="/src{image}" alt={title} class="shrink-0" />
    <h3 class="mt-4 text-center capitalize">{title}</h3>

    {#if show}
      <div
        class="absolute inset-0 grid place-items-center bg-black/60"
        in:fly={{ y: 200, duration: 500 }}
        out:fly={{ y: -200, duration: 500 }}
      >
        <a
          href="products/{id}"
          use:link
          class="bg-primary-dark hover:bg-primary rounded-full px-6 py-2 text-white"
          >Details</a
        >
      </div>
    {/if}
  </div>
</article>

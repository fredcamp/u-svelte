<script lang="ts">
  import { fly } from 'svelte/transition'
  import NavLinks from './NavLinks.svelte'
  import Button from '../Button.svelte'
  import { show } from '../../stores/nav'

  const minSize = '(min-width:768px)'

  function onResize() {
    if (window.matchMedia(minSize).matches) $show = false
  }
</script>

<svelte:window on:resize={onResize} />

<nav
  class="bg-primary-light fixed top-0 left-0 right-0 z-50 text-slate-900 shadow-sm"
>
  <div
    class="relative flex items-center justify-between py-5 px-6 md:mx-auto md:max-w-screen-md"
  >
    <NavLinks class="hidden md:flex md:gap-4" />
    <Button
      class="hover:text-primary-dark px-2 text-lg md:hidden"
      on:click={() => ($show = true)}
    >
      <span class="sr-only">show links</span>
      <i class="fas fa-bars" />
    </Button>
    <h1
      class="absolute left-1/2 -translate-x-1/2 text-3xl font-semibold tracking-wider"
    >
      Razors
    </h1>
    <div>
      <slot />
      <Button
        class="hover:text-primary-dark relative rounded-full px-2 text-lg shadow-md"
      >
        <span class="sr-only">cart</span>
        <i class="fas fa-shopping-cart z-[2]" />
        <span
          class="bg-primary-dark ring-primary-light absolute -top-2 -right-2 z-[1] rounded-full py-[2px] px-[6px] text-xs text-white ring-2"
          >0</span
        >
      </Button>
    </div>
  </div>

  {#if $show}
    <div
      transition:fly={{ x: -768 }}
      class="bg-primary-light fixed top-0 left-0 bottom-0 right-0 z-50 space-y-6 p-6 text-lg"
    >
      <Button
        class="hover:text-primary-dark px-2 text-lg md:hidden"
        on:click={() => ($show = false)}
      >
        <span class="sr-only">close</span>
        <i class="fas fa-close" />
      </Button>
      <h1 class="text-3xl font-semibold tracking-wider">Razors</h1>
      <NavLinks class="space-y-6" />
    </div>
  {/if}
</nav>

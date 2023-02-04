<script lang="ts">
  import { fly } from 'svelte/transition'
  import { link, Link } from 'svelte-routing'
  import NavLinks from './NavLinks.svelte'
  import Button from '../Button.svelte'
  import CartButton from '../Cart/CartButton.svelte'
  import { show, getProps } from '../../stores/nav'
  import backToTop from '../../utils/backToTop'

  let toggleLinks = false
  let innerWidth: number

  function onResize() {
    if (innerWidth > 768) {
      $show = false
      toggleLinks = true
    } else {
      toggleLinks = false
    }
  }

  function onClick(): void {
    $show = false
    backToTop()
  }
</script>

<svelte:window bind:innerWidth on:resize={onResize} />

<nav
  class="bg-primary-light fixed top-0 left-0 right-0 z-50 text-slate-900 shadow-sm"
>
  <div
    class="relative flex items-center justify-between py-5 px-6 lg:mx-auto lg:max-w-screen-lg"
  >
    {#if toggleLinks}
      <NavLinks {onClick} class="flex gap-4" />
    {:else}
      <Button
        class="hover:text-primary-dark px-2 text-lg"
        on:click={() => ($show = true)}
      >
        <span class="sr-only">show links</span>
        <i class="fas fa-bars" />
      </Button>
    {/if}
    <a
      href="/"
      class="absolute left-1/2 -translate-x-1/2 text-3xl font-semibold tracking-wider"
      use:link
    >
      <h1>Razors</h1>
    </a>
    <div class="space-x-2">
      {#if toggleLinks}
        <Link to="/login" {getProps} on:click={onClick}>login</Link>
      {/if}
      <CartButton on:click={() => console.log('cart button')} />
    </div>
  </div>

  <!-- for smaller screen size -->
  {#if $show}
    <div
      transition:fly={{ x: -769 }}
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
      <NavLinks {onClick} class="space-y-6">
        <li>
          <Link to="/login" {getProps} on:click={onClick}>login</Link>
        </li>
      </NavLinks>
    </div>
  {/if}
</nav>

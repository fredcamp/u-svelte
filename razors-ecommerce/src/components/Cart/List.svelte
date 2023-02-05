<script lang="ts">
  import { fly } from 'svelte/transition'
  import { elasticOut, elasticIn } from 'svelte/easing'
  import { flip } from 'svelte/animate'
  import { link } from 'svelte-routing'
  import Button from '../Button.svelte'
  import Card from './Card.svelte'
  import { show, cartItems, totalPrice } from '../../stores/cart'
  import { amountParser } from '../../utils/parser'
  import clickoutside from '../../utils/clickoutside'

  let user = false

  function onClick(): void {
    $show = false
  }
</script>

<aside class="fixed inset-0 z-50 !m-0 block bg-black/50">
  <section
    class="xs:max-w-[380px] absolute top-0 right-0 bottom-0 w-full overflow-y-auto bg-[#ffe3c6] px-4 pt-6 text-slate-900 shadow-md"
    use:clickoutside
    on:outclick={onClick}
    transition:fly={{ x: 400 }}
  >
    <div class="grid h-full grid-rows-[auto_1fr_auto]">
      <div class="flex items-center justify-between text-xl">
        <Button
          class="text-primary hover:text-primary-dark px-1"
          on:click={onClick}><i class="fas fa-close" /></Button
        >
        <h2 class="font-semibold tracking-wider">Your Cart</h2>
        <span />
      </div>
      <ul class="mt-4 space-y-2">
        {#each $cartItems as item (item.id)}
          <li
            out:fly={{ x: -100 }}
            animate:flip={{ duration: 400, delay: 300 }}
          >
            <Card {...item} />
          </li>
        {:else}
          <p
            in:fly={{ x: 100, delay: 500, easing: elasticOut }}
            class="text-center text-slate-500 mt-8"
          >
            Your cart is currently empty...
          </p>
        {/each}
      </ul>
      <div class="space-y-3 px-2 py-3">
        <p class="text-center text-lg font-semibold tracking-widest">
          Total : {amountParser($totalPrice)}
        </p>
        {#if user}
          <a
            href="/checkout"
            on:click={onClick}
            use:link
            class="bg-primary-dark hover:bg-primary block w-full rounded-full p-2 text-center text-sm text-white shadow-md"
            >Checkout</a
          >
        {:else}
          <p class="text-center capitalize tracking-wider text-slate-500">
            in order to checkout please <a
              href="/login"
              on:click={onClick}
              class="hover:text-primary text-rose-500 underline decoration-2 underline-offset-2"
              use:link>login</a
            >
          </p>
        {/if}
      </div>
    </div>
  </section>
</aside>

<script lang="ts">
  import Button from '../Button.svelte'
  import List from './List.svelte'
  import { show } from '../../stores/cart'
  import { totalQuantity } from '../../stores/cart'

  function onClick(): void {
    $show = true
  }
</script>

<Button
  class="hover:text-primary-dark relative rounded-full px-2 text-lg shadow-md"
  on:click={onClick}
>
  <span class="sr-only">cart</span>
  <i class="fas fa-shopping-cart z-[2]" />
  <span
    class="bg-primary-dark ring-primary-light absolute -top-2 -right-2 z-[1] rounded-full py-[2px] px-[6px] text-xs text-white ring-2"
    >{$totalQuantity}</span
  >
</Button>

{#if $show}
  <List />
{/if}

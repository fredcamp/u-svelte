<script lang="ts">
  import Button from '../Button.svelte'
</script>

<Button
  class="hover:text-primary-dark relative rounded-full px-2 text-lg shadow-md"
  on:click
>
  <span class="sr-only">cart</span>
  <i class="fas fa-shopping-cart z-[2]" />
  <span
    class="bg-primary-dark ring-primary-light absolute -top-2 -right-2 z-[1] rounded-full py-[2px] px-[6px] text-xs text-white ring-2"
    >0</span
  >
</Button>

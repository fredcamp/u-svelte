<script lang="ts">
  import Button from '../Button.svelte'
  import { amountParser } from '../../utils/parser'
  import { cartItems } from '../../stores/cart'

  export let id: number
  export let title: string
  export let price: number
  export let image: string
  export let amount: number

  function onRemove(): void {
    const findItem = $cartItems.find((item) => item.id === id)
    $cartItems = $cartItems.filter((item) => item !== findItem)
  }

  function onIncrease(): void {
    const findItem = $cartItems.find((item) => item.id === id)
    $cartItems = $cartItems.map((item) => {
      return item === findItem ? { ...item, amount: item.amount + 1 } : item
    })
  }

  function onDecrease(): void {
    const findItem = $cartItems.find((item) => item.id === id)

    if (findItem.amount === 1) {
      onRemove()
      return
    }

    $cartItems = $cartItems.map((item) => {
      return item === findItem ? { ...item, amount: item.amount - 1 } : item
    })
  }
</script>

<article class="bg-primary-dark/10 rounded-md">
  <div class="grid grid-cols-[auto_1fr_auto] items-center gap-2 px-2 py-1">
    <img src={image} alt={title} class="max-h-20 max-w-full" />
    <div class="flex flex-col items-start truncate">
      <h3 class="capitalize tracking-wider">
        {title}
      </h3>
      <h4 class="text-sm tracking-widest">{amountParser(price)}</h4>
      <Button
        class="text-sm tracking-wider text-slate-500 hover:text-rose-500"
        on:click={onRemove}>remove</Button
      >
    </div>
    <div class="flex flex-col items-center justify-between px-2">
      <Button class="hover:text-rose-500" on:click={onIncrease}>
        <span class="sr-only">increment quantity</span>
        <i class="fas fa-caret-up" />
      </Button>
      <p class="text-sm text-slate-500">{amount}</p>
      <Button class="hover:text-rose-500" on:click={onDecrease}>
        <span class="sr-only">decrement quantity</span>
        <i class="fas fa-caret-down" />
      </Button>
    </div>
  </div>
</article>

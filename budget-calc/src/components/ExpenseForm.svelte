<script lang="ts">
  import { slide } from 'svelte/transition'
  import { onMount, createEventDispatcher } from 'svelte'

  import Title from './Title.svelte'
  import Button from './Button.svelte'

  import clickOutside from '../utils/clickOutside'
  import numbersOnly from '../utils/numbersOnly'

  export let show: boolean

  export let name: string = ''
  export let amount: number = null
  let nameInput: HTMLInputElement

  const dispatch = createEventDispatcher()

  $: isEmpty = !name || !amount

  onMount(() => {
    nameInput.focus()
  })

  function reset(): void {
    name = ''
    amount = null
  }

  export function closeForm(): void {
    show = false
    document.body.classList.remove('overflow-y-hidden')
    reset()
  }
</script>

{#if show}
  <section class="fixed inset-0 grid place-items-center bg-black/90">
    <div
      class="relative mx-auto w-full max-w-md px-6"
      use:clickOutside
      on:outclick={closeForm}
    >
      <div class="flex items-center justify-between">
        <Title title="add expense" class="text-sky-400" />
        <Button
          class="rounded-md bg-rose-500 py-1 px-3 text-base font-semibold text-white hover:bg-rose-800"
          on:click={closeForm}
        >
          <i class="fa-sharp fa-solid fa-xmark" /> Close
        </Button>
      </div>
      <form
        class="mt-6 rounded-lg bg-white px-5 py-8 text-slate-800 shadow-md"
        on:submit|preventDefault={() =>
          dispatch('submit', { name, amount: Number(amount) })}
      >
        <label class="block">
          <p class="text-sm">Name</p>
          <input
            bind:this={nameInput}
            type="text"
            class="mt-1 w-full border-b-2 text-slate-600 focus:border-sky-500 focus:outline-none"
            bind:value={name}
            required
          />
        </label>
        <label class="mt-4 block">
          <p class="text-sm">Amount</p>
          <input
            type="text"
            class="mt-1 w-full border-b-2 text-slate-600 focus:border-sky-500 focus:outline-none"
            use:numbersOnly
            bind:value={amount}
            required
          />
        </label>
        {#if isEmpty}
          <p
            class="mt-4 text-center capitalize text-rose-500"
            transition:slide|local
          >
            please fill out all form fields
          </p>
        {/if}
        <Button
          type="submit"
          disabled={isEmpty}
          class="mt-4 w-full rounded-md bg-sky-500 p-2 capitalize text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-400"
          >add expense</Button
        >
      </form>
    </div>
  </section>
{/if}

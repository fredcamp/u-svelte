<script lang="ts">
  import { slide } from 'svelte/transition'
  import { getContext } from 'svelte'

  import Button from './Button.svelte'

  import { amountParser } from '../utils/parser'

  export let id: string
  export let name: string
  export let amount: number

  const removeExpense: (id: string) => void = getContext('remove')

  let show: boolean = false
</script>

<article class="rounded-lg border border-black/20 bg-white py-3 px-4 shadow-md">
  <div class=" flex items-center justify-between ">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="cursor-pointer text-slate-800 hover:text-sky-500">
      <h2 class="select-none text-lg capitalize tracking-wider">
        {name}
        <Button class="px-1" on:click={() => (show = !show)}>
          <span class="sr-only">show amount</span>
          <i
            class="fas fa-caret-down transition-transform {show
              ? 'rotate-x-180'
              : ''}"
          />
        </Button>
      </h2>
    </label>

    <div class="space-x-2">
      <Button class="p-2 text-green-500 hover:text-green-700">
        <span class="sr-only">edit</span>
        <i class="fas fa-pen" />
      </Button>
      <Button
        class="p-2 text-red-500 hover:text-red-700"
        on:click={() => removeExpense(id)}
      >
        <span class="sr-only">delete</span>
        <i class="fas fa-trash" />
      </Button>
    </div>
  </div>

  {#if show}
    <div transition:slide|local class="text-xs tracking-widest text-sky-700">
      Amount : {amountParser(amount)}
    </div>
  {/if}
</article>

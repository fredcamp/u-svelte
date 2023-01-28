<script lang="ts">
  import { getContext } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'

  import type Expense from '../types/Expense'

  import Title from './Title.svelte'
  import Card from './Card.svelte'
  import Button from './Button.svelte'

  export let data: Expense[]

  const clearExpenses: () => void = getContext('clear')
</script>

<section class="mt-5">
  <Title title="Expense List:" />
  <ul class="mt-4 space-y-5">
    {#each data as item, i (item.id)}
      <li
        in:fly={{ x: 50, delay: i * 350, duration: 1000, easing: elasticOut }}
        out:fade
      >
        <Card {...item} />
      </li>
    {:else}
      <li in:fly={{ x: 50, delay: 500, easing: elasticOut }}>
        <h2
          class="bg-rose-500 tracking-wider py-2 rounded-md text-white  capitalize text-lg text-center"
        >
          list of expenses is currently empty
        </h2>
      </li>
    {/each}
  </ul>
  {#if data.length > 0}
    <Button
      class="mt-6 w-full rounded-md bg-sky-500 p-2  capitalize tracking-wider text-white hover:bg-sky-600"
      on:click={() => {
        if (confirm('Are you sure you wanted to clear all expenses?'))
          clearExpenses()
      }}>clear expenses</Button
    >
  {/if}
</section>

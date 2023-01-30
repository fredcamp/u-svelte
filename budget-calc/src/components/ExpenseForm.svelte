<script lang="ts">
  import { slide, fly } from 'svelte/transition'
  import { onMount, createEventDispatcher } from 'svelte'

  import Modal from './Modal.svelte'
  import Title from './Title.svelte'
  import Button from './Button.svelte'

  import clickOutside from '../utils/clickOutside'
  import numbersOnly from '../utils/numbersOnly'

  export let show: boolean
  export let name: string
  export let amount: number
  export let isEditing: boolean

  let nameInput: HTMLInputElement
  const title = isEditing ? 'edit expense' : 'add expense'
  const dispatch = createEventDispatcher()

  $: isEmpty = !name || !amount

  onMount(() => {
    nameInput.focus()
  })

  function closeForm(): void {
    show = false
    document.body.classList.remove('overflow-y-hidden')
    name = ''
    amount = null
    isEditing = false
  }

  function onSubmit(): void {
    if (isEmpty) return

    isEditing ? dispatch('edit') : dispatch('add')
    closeForm()
  }
</script>

{#if show}
  <Modal>
    <div
      class="relative mx-auto w-full max-w-md rounded-lg bg-white px-6 py-8 shadow-md"
      use:clickOutside
      on:outclick={closeForm}
      in:fly={{ y: 80, duration: 500 }}
    >
      <div class="flex items-center justify-between">
        <Title {title} class="text-sky-700" />
        <Button
          class="rounded-md py-1 px-3 text-base font-semibold text-rose-500 hover:text-rose-800"
          on:click={closeForm}
        >
          <i class="fa-sharp fa-solid fa-xmark" /> Close
        </Button>
      </div>
      <form class="mt-6 text-slate-800" on:submit|preventDefault={onSubmit}>
        <label class="block">
          <p class="text-sm">Name</p>
          <input
            bind:this={nameInput}
            type="text"
            class="mt-1 w-full border-b-2 bg-transparent text-slate-600 focus:border-sky-500 focus:outline-none"
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
          class="mt-4 w-full rounded-md bg-sky-500 p-2 capitalize tracking-wider text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {title}
        </Button>
      </form>
    </div>
  </Modal>
{/if}

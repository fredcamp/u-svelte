<script lang="ts">
  import { setContext, onMount, afterUpdate } from 'svelte'

  import type Expense from './types/Expense'
  import Navbar from './components/Navbar.svelte'
  import Main from './components/Main.svelte'
  import List from './components/List.svelte'
  import Title from './components/Title.svelte'
  import ExpenseForm from './components/ExpenseForm.svelte'
  import Footer from './components/Footer.svelte'

  import { amountParser } from './utils/parser'
  import { getLocalStorage, setLocalStorage } from './localStorage'

  let data: Expense[] = []
  let showForm = false
  let isEditing = false

  let id: string = ''
  let name: string = ''
  let amount: number = null

  $: total = data.reduce((acc, curr) => acc + curr.amount, 0)

  setContext('remove', removeExpense)
  setContext('clear', clearExpenses)
  setContext('clickedit', onClickEdit)

  onMount(() => {
    data = getLocalStorage()
  })
  afterUpdate(() => setLocalStorage(data))

  // change show value when card update button is clicked
  function onClickEdit(itemId: string): void {
    const findItem = data.find((item) => item.id === itemId)

    id = findItem.id
    name = findItem.name
    amount = findItem.amount

    showForm = true
    isEditing = true
  }

  function removeExpense(id: string): void {
    data = data.filter((item) => item.id !== id)
  }

  function clearExpenses(): void {
    data = []
  }

  function addExpense(): void {
    const expense = { id: crypto.randomUUID(), name, amount: Number(amount) }
    data = [expense, ...data]
  }

  function editExpense(): void {
    data = data.map((item) => {
      return item.id === id ? { ...item, name, amount: Number(amount) } : item
    })
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <title>Budget Calculator</title>
</svelte:head>

<Navbar bind:show={showForm} />
<Main>
  <Title title={`total expenses: ${amountParser(total)}`} />
  <List {data} />

  {#if showForm}
    <ExpenseForm
      bind:show={showForm}
      bind:name
      bind:amount
      bind:isEditing
      on:add={addExpense}
      on:edit={editExpense}
    />
  {/if}
</Main>
<Footer />

<script lang="ts">
  import { setContext, SvelteComponent } from 'svelte'

  import Navbar from './components/Navbar.svelte'
  import Main from './components/Main.svelte'
  import List from './components/List.svelte'
  import Title from './components/Title.svelte'
  import ExpenseForm from './components/ExpenseForm.svelte'

  import expenses from './expenses'
  import { amountParser } from './utils/parser'

  let data = [...expenses]
  let showForm = false
  let addExpenseForm: SvelteComponent

  $: total = data.reduce((acc, curr) => acc + curr.amount, 0)

  setContext('remove', removeExpense)
  setContext('clear', clearExpenses)

  function removeExpense(id: string): void {
    data = data.filter((item) => item.id !== id)
  }

  function clearExpenses(): void {
    data = []
  }

  function addExpense(name: string, amount: number): void {
    data = [
      {
        id: crypto.randomUUID(),
        name,
        amount,
      },
      ...data,
    ]
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
      bind:this={addExpenseForm}
      on:submit={(e) => {
        const { name, amount } = e.detail
        addExpense(name, amount)
        addExpenseForm.closeForm()
      }}
    />
  {/if}
</Main>

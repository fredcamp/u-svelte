<script lang="ts">
  import { onMount, tick } from 'svelte'
  import { slide } from 'svelte/transition'
  import { navigate } from 'svelte-routing'
  import Main from '../components/Main.svelte'
  import Button from '../components/Button.svelte'
  import registerUser from '../strapi/registerUser'
  import loginUser from '../strapi/loginUser'
  import type { UserStrapi } from '../types/user.type'
  import userStore from '../stores/user'
  import alert from '../stores/alert'

  let email: string = ''
  let username: string = ''
  let password: string = ''
  let isMember: boolean = true
  let loading = false

  let emailDOM: HTMLInputElement
  let usernameDOM: HTMLInputElement

  $: isEmpty = isMember
    ? !email || !password || $alert.show
    : !email || !password || !username || $alert.show

  onMount(() => {
    emailDOM.focus()

    if ($userStore.jwt) {
      navigate('/', {
        replace: true,
      })
    }
  })

  function toggleIsMember() {
    email = username = password = ''
    isMember = !isMember

    tick().then(() => {
      if (!isMember) usernameDOM.focus()
      else emailDOM.focus()
    })
  }

  async function onSubmit() {
    if (isEmpty) return

    loading = true
    let user: UserStrapi

    if (isMember) {
      user = await loginUser(email, password)
    } else {
      user = await registerUser(username, email, password)
    }

    if (user.jwt) {
      $userStore = { jwt: user.jwt, username: user.user.username }
      alert.toggleItem('text', `Welcome, ${$userStore.username}!`)
      alert.toggleItem('type', 'success')
      alert.toggleItem('show', true)

      navigate('/products', {
        replace: true,
      })
    } else {
      alert.toggleItem('show', true)
      alert.toggleItem('text', user.error.message)
      alert.toggleItem('type', 'danger')
    }
    loading = false
  }
</script>

<svelte:head>
  <title>Razors | {isMember ? 'Login' : 'Register'}</title>
</svelte:head>

<Main
  class="mt-28 w-full px-6 text-slate-800 lg:mx-auto lg:max-w-screen-lg {loading
    ? '!cursor-wait'
    : 'cursor-default'}"
>
  <h1 class="text-center text-2xl font-semibold">
    {isMember ? 'Login' : 'Register'}
  </h1>
  <section
    class="bg-primary-light/60 border-primary-dark/30 mx-auto mt-9 max-w-md rounded-xl border-2 py-8 px-10 shadow-md"
  >
    <form class="grid gap-4" on:submit|preventDefault={onSubmit}>
      {#if !isMember}
        <label transition:slide|local={{ duration: 400 }} class="space-y-1">
          <p class="text-sm tracking-wider">
            <i class="fas fa-user mr-1" /> Username :
          </p>
          <input
            type="text"
            class="focus:ring-primary-dark w-full rounded-lg px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring-2"
            required
            bind:this={usernameDOM}
            bind:value={username}
          />
        </label>
      {/if}
      <label class="space-y-1">
        <p class="text-sm tracking-wider">
          <i class="fas fa-envelope mr-1" /> Email :
        </p>
        <input
          type="text"
          class="focus:ring-primary-dark w-full rounded-lg px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring-2"
          required
          bind:this={emailDOM}
          bind:value={email}
        />
      </label>
      <label class="space-y-1">
        <p class="text-sm tracking-wider">
          <i class="fas fa-key mr-1" /> Password :
        </p>
        <input
          type="password"
          class="focus:ring-primary-dark w-full rounded-lg px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring-2"
          required
          bind:value={password}
        />
      </label>
      {#if isEmpty}
        <p class="text-center text-sm capitalize tracking-wider text-red-500">
          please fill out all form fields
        </p>
      {/if}
      <Button
        type="submit"
        class="bg-primary-dark disabled:bg-primary mt-2 rounded-full p-2 text-sm tracking-widest text-white shadow-md transition-colors ease-linear hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-1 disabled:cursor-not-allowed
        {loading ? '!cursor-wait' : 'cursor-pointer'}"
        disabled={isEmpty || loading}
      >
        {loading ? 'Please wait...' : 'Submit'}
      </Button>
    </form>
    <div class="mt-5 text-xs text-slate-600">
      <div
        class="xs:flex-row xs:gap-4 flex flex-col items-center justify-center gap-2 tracking-wider"
      >
        {#if isMember}
          <p>Need to Register?</p>
          <Button
            class="text-primary hover:text-primary-dark underline"
            on:click={toggleIsMember}>Click Here</Button
          >
        {:else}
          <p>Already have an Account?</p>
          <Button
            class="text-primary-dark hover:text-primary underline"
            on:click={toggleIsMember}>Click Here</Button
          >
        {/if}
      </div>
    </div>
  </section>
</Main>

<script lang="ts">
  import { link, navigate } from 'svelte-routing'
  import { onMount } from 'svelte'
  import Main from '../components/Main.svelte'
  import Button from '../components/Button.svelte'
  import { totalPrice, cartItems } from '../stores/cart'
  import user from '../stores/user'
  import { amountParser } from '../utils/parser'
  import { STRIPE_KEY } from '../env'
  import createOrder from '../strapi/createOrder'

  let fullname: string
  let address: string

  // stripe vars
  let stripeElements: HTMLElement
  let stripeErrors: HTMLElement
  let stripe: stripe.Stripe
  let elements: stripe.elements.Elements
  let card: stripe.elements.Element

  $: isEmpty = !fullname || !address

  onMount(() => {
    if (!$user.jwt) {
      navigate('/login', {
        replace: true,
      })
      return
    }
  })

  async function onSubmit(): Promise<void> | never {
    try {
      const response = await stripe.createToken(card)
      if (response.error) {
        throw new Error(response.error.message)
      }

      const { token } = response
      if (token) {
        const { id: stripeToken } = token
        await createOrder({
          name: fullname,
          address,
          total: $totalPrice,
          items: $cartItems,
          stripeToken,
          userToken: $user.jwt,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  function setupStripe(): void {
    if ($totalPrice <= 0) return

    stripe = Stripe(STRIPE_KEY)
    elements = stripe.elements()
    card = elements.create('card')
    card.mount(stripeElements)

    card.addEventListener('change', handleStripeError)
  }

  function handleStripeError(e): void {
    if (e.error) {
      stripeErrors.textContent = e.error.message
    } else {
      stripeErrors.textContent = ''
    }
  }
</script>

<svelte:head>
  <title>Razors | Checkout</title>
  <script src="https://js.stripe.com/v3/" on:load={setupStripe}></script>
</svelte:head>

<Main class="mt-28 w-full px-6 text-slate-800 lg:mx-auto lg:max-w-screen-lg">
  <h1 class="text-center text-2xl font-semibold">Checkout</h1>

  {#if $totalPrice > 0}
    <section class="mt-10">
      <form
        on:submit|preventDefault={onSubmit}
        class="bg-primary-light/60 border-primary-dark/30 mx-auto mt-9 max-w-md rounded-xl border-2 py-8 px-10 shadow-md"
      >
        <div class="grid gap-4">
          <h3 class="text-primary-dark text-sm font-semibold tracking-wider">
            <i class="fas fa-money-check" />
            Order Total : {amountParser($totalPrice)}
          </h3>
          <label class="space-y-1">
            <p class="text-sm"><i class="fas fa-user mr-2" />Full Name :</p>
            <input
              type="text"
              class="focus:ring-primary-dark w-full rounded-lg px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring-2"
              bind:value={fullname}
            />
          </label>
          <label class="space-y-1">
            <p class="text-sm"><i class="fas fa-home mr-2" />Address :</p>
            <textarea
              class="focus:ring-primary-dark w-full rounded-lg px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring-2"
              rows="3"
              bind:value={address}
            />
          </label>
          <article class="text-sm">
            <label for="card-element" class="text-primary-dark"
              >Debit or Credit Card</label
            >
            <ul class="mt-1 list-disc pl-6 text-xs text-slate-500">
              <li>
                Test using this card : <code
                  class="text-primary-dark select-all">4242 4242 4242 4242</code
                >
              </li>
              <li>Enter any 5-digit zip code</li>
              <li>Enter any 3-digit CVC</li>
            </ul>
            <div
              id="card-element"
              class="mt-3 rounded-lg bg-white px-1 py-2 shadow-sm"
              bind:this={stripeElements}
            >
              <!-- Elements will create input elements here -->
            </div>

            <!-- We'll put the error messages in this element -->
            <div
              id="card-errors"
              class="mt-2 text-center text-xs text-rose-500"
              role="alert"
              bind:this={stripeErrors}
            >
              <!-- stripe errors -->
            </div>
          </article>
          {#if isEmpty}
            <p
              class="text-center text-sm capitalize tracking-wider text-red-500"
            >
              please fill out all form fields
            </p>
          {/if}
          <Button
            type="submit"
            class="bg-primary-dark disabled:bg-primary mt-2 rounded-full p-2 text-sm tracking-widest text-white shadow-md transition-colors ease-linear hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-1 disabled:cursor-not-allowed"
            disabled={isEmpty}>Submit</Button
          >
        </div>
      </form>
    </section>
  {:else}
    <div class="mt-16 flex flex-col items-center justify-center space-y-4">
      <h2 class="text-center tracking-wider text-slate-400">
        Your cart is currently empty
      </h2>
      <a
        href="/products"
        class="bg-primary-dark hover:bg-primary focus:ring-primary mx-auto mt-2 inline-block rounded-full px-6 py-2 text-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
        use:link>Shop items now</a
      >
    </div>
  {/if}
</Main>

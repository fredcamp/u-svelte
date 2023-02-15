declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onoutclick?: (e: Event<any>) => void
  }
}

declare var Stripe: stripe.StripeStatic;

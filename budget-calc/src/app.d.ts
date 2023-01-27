declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onoutclick: (e: CustomEvent<any>) => void
  }
}

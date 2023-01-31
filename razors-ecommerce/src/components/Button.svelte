<script lang="ts">
  export let type: 'button' | 'submit' = 'button'
  let className: string = ''

  export { className as class }
</script>

<button {type} class={className} {...$$restProps} on:click>
  <slot />
</button>

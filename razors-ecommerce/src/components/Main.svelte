<script lang="ts">
  let className: string = ''

  export { className as class }
</script>

<main class="min-h-screen {className}">
  <slot />
</main>

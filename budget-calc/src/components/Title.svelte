<script lang="ts">
  export let title: string = ''
  let className: string = ''

  export { className as class }
</script>

{#if title}
  <h2 class="text-lg font-semibold capitalize tracking-widest {className}">
    {title}
  </h2>
{/if}

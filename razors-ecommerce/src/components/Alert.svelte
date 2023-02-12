<script lang="ts">
  import { onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  import alert from '../stores/alert'
  import Button from './Button.svelte'

  let timeoutId: NodeJS.Timeout

  onMount(() => {
    timeoutId = setTimeout(() => {
      onClick()
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
    }
  })

  function onClick() {
    alert.toggleItem('show', false)
  }
</script>

{#if $alert}
  <div
    class="fixed top-20 left-1/2 z-[999] -translate-x-1/2 text-slate-900"
    in:fly={{ y: -200, duration: 400 }}
    out:fade
  >
    <div
      class="max-w-xs rounded-lg p-8 pb-6 shadow-md {$alert.type === 'success'
        ? 'bg-[#fcaa81]'
        : 'bg-[#ff6a6a]'}"
    >
      <p class="text-sm tracking-wider">{$alert.text}</p>
      <Button
        class="absolute top-2 right-2 px-1 {$alert.type === 'success'
          ? 'hover:text-[#ff6a6a]'
          : 'hover:text-[#fcaa81]'}"
        on:click={onClick}
      >
        <i class="fas fa-close" />
      </Button>
    </div>
  </div>
{/if}

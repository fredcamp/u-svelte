<script lang="ts">
  import { onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  import alert from '../stores/alert'
  import Button from './Button.svelte'

  let intervalId: NodeJS.Timer

  const duration = 2000
  const step = 10

  let start = Date.now()
  let end = start + duration
  $: progress = ((end - start) / duration) * 100

  onMount(() => {
    setAlertInterval()

    return () => {
      clearInterval(intervalId)
    }
  })

  function setAlertInterval() {
    intervalId = setInterval(() => {
      start += step

      if (start >= end) {
        clearInterval(intervalId)
        onClick()
      }
    }, step)
  }

  function onClick() {
    alert.toggleItem('show', false)
  }

  function onHover() {
    clearInterval(intervalId)
  }

  function onBlur() {
    end = end - start + Date.now()
    start = Date.now()
    setAlertInterval()
  }
</script>

{#if $alert}
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    class="fixed top-20 left-1/2 z-[999] -translate-x-1/2 text-slate-900"
    on:mouseover={onHover}
    on:mouseout={onBlur}
    in:fly={{ y: -200, duration: 400 }}
    out:fade
  >
    <div
      class="relative max-w-xs overflow-hidden rounded-lg p-8 pb-6 shadow-md {$alert.type ===
      'success'
        ? 'bg-[#c5ff95]'
        : 'bg-primary-dark'}"
    >
      <span
        class="absolute top-0 left-0 right-0 h-[5px] w-0 bg-black/50"
        style="width:{100 - progress}%"
      />
      <p class="text-center text-sm tracking-wider">{$alert.text}</p>
      <Button
        class="absolute top-2 right-2 px-1 {$alert.type === 'success'
          ? 'hover:text-white'
          : 'hover:text-[#fcaa81]'}"
        on:click={onClick}
      >
        <i class="fas fa-close" />
      </Button>
    </div>
  </div>
{/if}

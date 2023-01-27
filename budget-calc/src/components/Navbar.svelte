<script lang="ts">
  import Button from './Button.svelte'

  export let show = false
</script>

<nav class="bg-sky-500 shadow-md">
  <div
    class="mx-auto flex flex-wrap items-center justify-between py-4 px-5 sm:max-w-screen-sm sm:px-2"
  >
    <h1 class="text-xl font-semibold tracking-wider">Budget Calculator</h1>
    <Button
      class="text-black hover:text-sky-200"
      on:click={() => {
        show = true
        document.body.classList.add('overflow-y-hidden')
      }}
    >
      <i class="far fa-plus-square" /> Add Item
    </Button>
  </div>
</nav>

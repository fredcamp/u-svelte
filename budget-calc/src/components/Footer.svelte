<script lang="ts">
  import tailwind from '../assets/tailwind.svg'
  import svelte from '../assets/svelte.svg'
  import typescript from '../assets/typescript.svg'
</script>

<footer class="mt-4 bg-sky-700 text-slate-200">
  <div
    class="mx-auto flex items-center justify-between py-3 px-5 sm:max-w-screen-sm sm:px-2"
  >
    <div class="flex space-x-2">
      <p>Created by :</p>
      <a
        class="underline-offset-[3px] hover:underline hover:decoration-sky-400 hover:decoration-solid hover:decoration-1"
        href="https://github.com/fredcamp">Fred Campo</a
      >
    </div>
    <div class="flex space-x-2">
      <p>Made with:</p>
      <div class="inline-flex items-center space-x-2">
        <img
          class="w-4 grayscale hover:grayscale-0"
          src={svelte}
          alt="svelte"
        />
        <img
          class="w-4 grayscale hover:grayscale-0"
          src={typescript}
          alt="typescript"
        />
        <img
          class="w-5 grayscale hover:grayscale-0"
          src={tailwind}
          alt="tailwind"
        />
      </div>
    </div>
  </div>
</footer>

<script lang="ts">
  import tailwind from '../assets/images/tailwind.svg'
  import svelte from '../assets/images/svelte.svg'
  import typescript from '../assets/images/typescript.svg'
</script>

<footer class="bg-primary-light mt-32 text-sm text-slate-900">
  <div
    class="mx-auto flex items-center justify-between py-4 px-5 lg:max-w-screen-lg"
  >
    <div class="flex space-x-2">
      <p>&copy; 2023 &mdash;</p>
      <a class="hover:text-primary-dark" href="https://github.com/fredcamp"
        >Fred Campo</a
      >
    </div>
    <div class="flex space-x-2">
      <p>Built with:</p>
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

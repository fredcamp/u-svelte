<script lang="ts">
  import tailwind from '../assets/tailwind.svg'
  import svelte from '../assets/svelte.svg'
  import typescript from '../assets/typescript.svg'
  import strapi from '../assets/strapi.svg'
</script>

<footer class="bg-primary-light mt-28 text-sm text-slate-900">
  <div
    class="mx-auto flex flex-wrap items-center justify-between py-4 px-5 lg:max-w-screen-lg"
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
          src={strapi}
          alt="strapi"
        />
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

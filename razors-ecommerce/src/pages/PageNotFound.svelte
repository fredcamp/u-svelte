<script lang="ts">
  import { link } from 'svelte-routing'
  import Main from '../components/Main.svelte'
  import errorImg from '../assets/error404.png'
</script>

<svelte:head>
  <title>Razors | 404</title>
</svelte:head>

<Main class="mt-24 w-full px-6 lg:mx-auto lg:max-w-screen-lg">
  <div class="grid place-items-center">
    <img src={errorImg} alt="page not found" class="max-h-[500px] max-w-full" />
    <div class="flex flex-col items-center justify-center space-y-2">
      <h1 class="text-lg font-semibold tracking-wider">
        Error 404 | Page Not Found
      </h1>
      <a
        href="/"
        class="bg-primary-dark hover:bg-primary inline-block rounded-full px-5 py-3 text-center text-sm text-white"
        use:link>Go Back Home</a
      >
    </div>
  </div>
</Main>

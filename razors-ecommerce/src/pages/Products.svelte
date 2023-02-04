<script lang="ts">
  import Main from '../components/Main.svelte'
  import List from '../components/Products/List.svelte'
</script>

<svelte:head>
  <title>Razors | Products</title>
</svelte:head>

<Main class="mt-32 px-6 lg:mx-auto lg:max-w-screen-lg">
  <List title="Our Products" />
</Main>

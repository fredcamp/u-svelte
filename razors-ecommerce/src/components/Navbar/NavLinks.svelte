<script lang="ts">
  import { Link } from 'svelte-routing'
  import { getProps } from '../../stores/nav'
  import links from '../../constants/links'

  let className: string = ''

  export { className as class }
  export let onClick: () => void
</script>

<ul class={className}>
  {#each links as link}
    <li>
      <Link to={link.url} {getProps} on:click={onClick}>{link.title}</Link>
    </li>
  {/each}
  <slot />
</ul>

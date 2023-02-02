<script lang="ts">
  import { Link } from 'svelte-routing'
  import { show } from '../../stores/nav'
  import backToTop from '../../utils/backToTop'

  let className: string = ''

  export { className as class }

  function getProps({ href, isPartiallyCurrent, isCurrent }): {
    class?: string
  } {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent

    if (isActive) {
      return {
        class:
          'relative px-2 after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:bg-primary-dark after:transition-all after:origin-center',
      }
    }
    return {
      class:
        'relative px-2 after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-right after:scale-x-0 after:bg-primary-dark after:transition-transform after:hover:origin-left hover:after:scale-x-100 after:duration-300',
    }
  }

  function onClick(): void {
    $show = false
    backToTop()
  }
</script>

<ul class={className}>
  <li><Link to="/" {getProps} on:click={onClick}>Home</Link></li>
  <li><Link to="/products" {getProps} on:click={onClick}>Products</Link></li>
  <li><Link to="/about" {getProps} on:click={onClick}>About</Link></li>
  {#if $show}
    <li><Link to="/login" {getProps} on:click={onClick}>Login</Link></li>
  {/if}
</ul>

<script lang="ts">
  import loading from '../assets/loading.svg'

  export let height: number = 320
</script>

<div class="relative col-[1/-1] flex items-center justify-center">
  <p class="absolute font-semibold tracking-widest text-white">Loading...</p>
  <img src={loading} alt="loading" style:height="{height}px" />
</div>

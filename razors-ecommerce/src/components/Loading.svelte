<script lang="ts">
  import loading from '../assets/images/loading.svg'

  export let height: number = 80
</script>

<div class="relative col-[1/-1] flex items-center justify-center">
  <p class="absolute font-semibold tracking-widest text-white">Loading...</p>
  <img src={loading} alt="loading" class="h-{height}" />
</div>

<script lang="ts">
  export let icon: string
</script>

<article
  class="cursor-pointer rounded-lg bg-orange-100 p-8 shadow-lg transition-transform hover:-translate-y-4"
>
  <div class="flex flex-col items-center justify-center gap-5 text-center">
    <i class="fas text-4xl {icon}" />
    <h3 class="text-lg font-semibold">
      <slot name="title" />
    </h3>
    <p>
      <slot name="body" />
    </p>
    <p class="text-primary-dark font-semibold">
      <slot name="contact" />
    </p>
  </div>
</article>

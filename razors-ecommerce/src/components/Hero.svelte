<script lang="ts">
</script>

<header
  class="bg-hero-background z-40 h-screen bg-cover bg-fixed bg-center bg-no-repeat"
>
  <div
    class="text-primary-light h-full bg-gradient-to-br from-slate-900/70 to-slate-600/60"
  >
    <div
      class="flex h-full flex-col items-start justify-center space-y-4 px-6 lg:mx-auto  lg:max-w-screen-lg"
    >
      <h2
        class="font-serif text-4xl font-semibold drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Foam, Shave, & Grow
      </h2>
      <p class="text-xl drop-shadow-2xl sm:text-2xl">
        Embrace your choices &mdash; we do
      </p>
      <slot />
    </div>
  </div>
</header>

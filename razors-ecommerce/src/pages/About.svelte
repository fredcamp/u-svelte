<script lang="ts">
  import { fade } from 'svelte/transition'
  import Main from '../components/Main.svelte'
  import AboutCard from '../components/AboutCard.svelte'
</script>

<svelte:head>
  <title>Razors | About</title>
</svelte:head>

<Main class="mt-14 sm:mt-16">
  <section
    class="grid max-h-[500px] items-center overflow-hidden bg-[#ffe3c6] sm:grid-cols-2"
    in:fade={{ duration: 500 }}
  >
    <div
      class="mx-auto max-w-sm space-y-3 px-8 pt-4 pb-28 text-center sm:justify-self-end sm:text-left md:mr-20 lg:mr-28"
    >
      <h1 class="mt-8 text-2xl font-semibold">About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        tempora quas libero tenetur consequuntur? Eaque in qui illum, minima
        laudantium repellendus dignissimos? Minus, facilis modi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        recusandae.
      </p>
    </div>
    <img
      src="/images/hero2.jpg"
      alt="electric hair trimmer, glass pint jars, and journal on top of wooden surface"
      class="hidden h-full rounded-tl-[20%_70%] rounded-bl-[20%_50%] object-cover object-left sm:block"
    />
  </section>
  <div class="px-6 lg:mx-auto lg:max-w-screen-lg">
    <section class="grid -translate-y-10 gap-10 sm:grid-cols-2">
      <AboutCard icon="fa-phone">
        <svelte:fragment slot="title">Talk to Sales</svelte:fragment>
        <svelte:fragment slot="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
          libero.
        </svelte:fragment>
        <svelte:fragment slot="contact">+123 4 567 8900</svelte:fragment>
      </AboutCard>
      <AboutCard icon="fa-comments">
        <svelte:fragment slot="title">Talk to Customer Service</svelte:fragment>
        <svelte:fragment slot="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis
          ipsum iure volupt
        </svelte:fragment>
        <svelte:fragment slot="contact">+234 5 678 9001</svelte:fragment>
      </AboutCard>
    </section>
    <section class="mt-8 space-y-8">
      <h2 class="text-center text-xl font-semibold capitalize">what we do?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nemo
        asperiores, odio soluta debitis doloremque saepe neque eum, ducimus iste
        cum iure praesentium! Iure hic eius ipsa veniam quidem quis vitae unde
        deserunt earum deleniti vero sapiente distinctio recusandae harum animi
        itaque laudantium dolor, voluptatibus aliquam magnam? Cumque, impedit
        recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolores harum sint numquam inventore rerum labore corrupti ducimus,
        incidunt voluptatibus ut.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        minus dolorum natus obcaecati adipisci consequatur nihil exercitationem
        dolor corporis assumenda.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error
        ipsam perspiciatis cum, non, animi quod, repudiandae perferendis
        pariatur nisi aliquam id! Qui, voluptates animi harum eligendi ea eum
        fugiat porro aliquam cum, corrupti ratione perspiciatis! At perferendis
        consectetur aperiam provident incidunt corrupti totam quia delectus
        quisquam, necessitatibus facere aliquid?
      </p>
    </section>
  </div>
</Main>

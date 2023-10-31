<script setup>
  import Clients from "../components/Clients.vue";
</script>

<template>
  <section>
    <div class="bg-[url('/src/assets/about-page-title02.jpg')] py-32 px-16 md:px-32">
      <h2 class="grid w-full place-items-center bottom-28 text-2xl md:bottom-20 lg:bottom-24 md:text-4xl font-bold text-red-700">
        BLOOMHEIGHT Consultancy
      </h2>
      <p class="grid w-full place-items-center bottom-20 md:bottom-12 lg:bottom-16 text-white">
        <span>
          You are here:
          <router-link class="ml-5 hover:text-red-500"  to="/">Home</router-link>
          /
          <router-link class="hover:text-red-500" to="/about">About</router-link>
        </span>
      </p>
    </div>

    <section class="p-8 flex flex-col md:flex-row md:mt-5 md:p-16 lg:p-20 xl:p-24">
      <div class="text-gray-900 w-full mb-5 md:mb-0 md:w-1/2 md:mr-5">
        <line class="flex border border-red-400 w-12 h-1 bg-red-400 mb-3"></line>
        <h2 class="text-xl font-bold mb-5">
          COMPANY PROFILE
        </h2>
        <p class="text-xs xl:text-sm mt-5">
          We are Bloom Height Business Consultancy Company, the last business consultancy
          company you will ever need.
          If you find it tough to scale your business, then you need to talk to us.
          We are a team with 10+ years of experience in helping businesses build,
          scale and grow a dominant online and physical presence. As your strategist,
          we get behind you and supercharge your brand as if it were our own.
          Contact us for a free consultancy.

          <span class="block mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium aliquam cupiditate deserunt, ducimus eveniet laudantium o
          fficia quo quod quos rem tempore ullam, vel, voluptates! Animi assumenda
          exercitationem fuga ipsum ratione!
          </span>

          <span class="block mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aperiam blanditiis consectetur cupiditate doloremque fugit
          ipsam nobis porro veritatis? At cupiditate dignissimos dolorum
          ipsam laborum tenetur.
        </span>
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="/src/assets/innovative.jpg"
             class="h-full" alt=""
        >
      </div>
    </section>
  </section>

  <Clients />

</template>

<style scoped>

</style>
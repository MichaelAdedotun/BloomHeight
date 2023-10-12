<script setup>

</script>

<template>
  <footer class="bg-footer-bg bg-dark-gray text-gray-400 py-10 px-8 md:px-20 xl:px-28">
    <section class="flex flex-col justify-between items-start my-8 md:flex-row  md:my-16">
      <div class="mb-10 md:mb-0">
        <h2 class="text-white text-lg font-semibold">
          NEWSLETTER SUBSCRIBE
        </h2>
        <P class="my-5 text-sm">
          Subscribe to our newsletter <br>
          and we will inform you about <br>
          newest projects and promotions.
        </P>
        <form class="flex justify-center items-center mt-7">
          <input class="px-5 py-2 text-sm bg-gray-500 rounded-tl rounded-bl outline-0" type="email" placeholder="Your email...">
          <a href="" class="px-3 py-2 bg-red-600 text-white text-sm rounded-tr rounded-br"><i class="fa-solid fa-envelope"></i></a>
        </form>
      </div>

      <div class="mb-10 md:mb-0">
        <h2 class="text-white text-lg font-semibold mb-5">CONTACT US</h2>
        <P>
          No 22 Lucky Nwagwu Street, <br>
          Police Signboard, Lugbe, Abuja.
        </P>
        <P class="my-2 text-white">
          +234 8034595697
        </P>
        <a href="" class="hover:text-green-600">
          contact@bloomheight.com
        </a>
        <div class="mt-5">
          <a href="" class="mr-5 hover:text-red-500"><i class="fa-brands fa-facebook text-xl"></i></a>
          <a href="" class="mr-5 hover:text-red-500"><i class="fa-brands fa-instagram text-xl"></i></a>
          <a href="" class="mr-5 hover:text-red-500"><i class="fa-brands fa-twitter text-xl"></i></a>
          <a href="" class="hover:text-red-500"><i class="fa-brands fa-youtube text-xl"></i></a>
        </div>
      </div>

      <div class="">
        <h2 class="text-white text-lg font-semibold mb-5">
          BUILDING DIGITAL <br>
          BUSINESSES fOR AFRICA
        </h2>
        <div class="flex flex-col gap-2">
          <router-link class="underline text-red-600 mr-5" to="">Digital Affiliate Marketer</router-link>
          <router-link class="underline text-red-600" to="">Web Design Promo</router-link>
        </div>
      </div>
    </section>

    <div class="flex flex-col-reverse gap-3 text-center justify-between  border-t border-t-gray-600 text-xs pt-4 px-4 md:flex-row">
      <p>Copyright © 2023 Bloom Height</p>
      <span>Powered by <router-link to="" class="underline">Bloomheight</router-link></span>
    </div>
  </footer>
</template>

<style scoped>

</style>
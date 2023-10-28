<script setup>

</script>

<template>
  <section>
    <div class="bg-[url('/src/assets/contact-us.jpg')] bg-center bg-cover bg-no-repeat p-44"></div>

    <div class="flex flex-col px-10 md:flex-row md:px-20 xl:px-28 py-16">
      <section class="w-full md:w-1/2">
        <line class="flex border border-red-400 w-12 h-1 bg-red-400 mb-1"></line>
        <h2 class="text-xl font-bold mb-7">YOUR ENQUIRY</h2>
        <p class="text-sm text-gray-600 ">
          For all enquiries about any of our services, you can reach out to
          us directly via the company information or send your request to us
          by filling the form below.
        </p>

        <form class="my-5 text-gray-600">
          <label for="text" class="flex flex-col w-full mb-5 text-sm">
            First Name:
            <input type="text" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
          </label>
          <label for="text" class="flex flex-col w-full mb-5 text-sm">
            Last Name:
            <input type="text" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
          </label>
          <label for="email" class="flex flex-col w-full mb-5 text-sm">
            Email:
            <input type="email" class="w-full h-10 rounded outline-0 px-5 border border-gray-300 mt-2">
          </label>
          <label for="text" class="flex flex-col w-full mb-5 text-sm">
            Message:
            <textarea class="w-full h-36 rounded outline-0 px-5 border border-gray-300 mt-2">

            </textarea>
          </label>

          <div class="flex justify-end mt-5">
            <button class="px-10 py-3 bg-red-500 text-white text-sm font-semibold rounded-full">SUBMIT</button>
          </div>
        </form>
      </section>

      <section class="hidden md:block md:ml-10">
        <line class="flex border border-red-400 w-12 h-1 bg-red-400 mb-1"></line>
        <h2 class="text-lg font-bold mb-7">COMPANY INFORMATION</h2>
        <p class="text-sm mb-2 text-gray-600">
          No 22 Lucky Nwagwu Street, Police Signboard, <br>
          Lugbe, Abuja.
        </p>
        <span class="my-2 text-sm text-red-500 block">
          +234 8034595697
        </span>
        <a href="#" class="text-sm text-gray-600 hover:text-red-600">
          contact@bloomheight.com
        </a>
      </section>
    </div>
  </section>
</template>

<style scoped>

</style>
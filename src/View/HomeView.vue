<script setup>
  import Clients from "../components/Clients.vue";
</script>

<template>
    <section class="
                    bg-home-bg bg-fixed bg-no-repeat bg-cover bg-right h-full text-white p-5
                    md:p-16
                    lg:px-20 py-16
                    xl:p-24
                   ">
      <div class="mb-10">
        <h1 class="text-2xl font-semibold mb-5
                    md:text-3xl md:mb-8
                    lg:text-5xl
                    xl:text-6xl
                   "
        >
          We Define Our Success <br>
          By Your Success
        </h1>
        <p class="text-xs md:text-sm">
          We are Bloom Height Business Consultancy Company,
          the last business consultancy company you will ever need. <br>
          If you find it tough to scale your business, then you need to talk to us.
        </p>
      </div>

      <div>
        <a href="" class="mr-5 hover:text-red-500"><i class="fa-brands fa-facebook text-xl"></i></a>
        <a href="" class="mr-5 hover:text-red-500"><i class="fa-brands fa-instagram text-xl"></i></a>
        <a href="" class="mr-5 hover:text-red-500"><i class="fa-brands fa-twitter text-xl"></i></a>
        <a href="" class="hover:text-red-500"><i class="fa-brands fa-youtube text-xl"></i></a>
      </div>
    </section>

<!--What we do section starts-->
    <section class="px-8 py-16 md:p-16 lg:p-20">
      <div class="grid place-content-center mb-14">
        <h1 class="text-3xl text-gray-900">
          What We Do
        </h1>
        <span class="grid w-full place-items-center">
          <line class="flex border border-red-500 w-12 h-1 mt-2 bg-red-500"></line>
        </span>
      </div>

      <div class="flex flex-col gap-5 md:flex-row md:gap-3 lg:gap-5">
        <div class="w-full h-full bg-white border border-gray-200 rounded-2xl shadow">
          <a href="#">
            <img class="
                          rounded-t-2xl w-full
                          md:h-48
                          lg:h-52
                          xl:h-64
                        "
                 src="/src/assets/OIP.jfif" alt=""
            />
          </a>
          <div class="p-5 md:p-4 xl:p-6">
            <h5 class="font-bold text-gray-900 text-xl
                        md:mb-1 md:text-lg
                        lg:text-xl
                        xl:mb-3 xl:text-2xl
                      "
            >
              Let's help you build what they will buy.
            </h5>
            <p class="font-normal text-gray-500 text-xs my-3
                        lg:mt-3 lg:mb-5
                        xl:my-5 xl:text-sm
                      "
            >
              Business branding is more than just putting a logo, few colors or a website in front.
              Lets do your branding for you.
            </p>
            <router-link to="/businessBranding" class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:outline-none">
              Learn more
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </router-link>
          </div>
        </div>

        <div class="w-full h-full bg-white border border-gray-200 rounded-2xl shadow">
          <a href="#">
            <img class="
                          rounded-t-2xl w-full
                          md:h-48
                          lg:h-52
                          xl:h-64
                        "
                 src="/src/assets/web-design.jpg" alt=""
            />
          </a>
          <div class="p-5 md:p-4 xl:p-6">
            <h5 class="font-bold  text-gray-900 text-xl
                        md:mb-1 md:text-lg
                        lg:text-xl
                        xl:mb-3 xl:text-2xl
                      "
            >
              Add Brilliance to your online Presence
            </h5>
            <p class="font-normal text-gray-500 text-xs my-3
                        lg:mt-3 lg:mb-5
                        xl:my-5 xl:text-sm
                      "
            >
              Web design is more than being on the net, its about being found on the net.
              Your online presence should make a bold statement.
            </p>
            <router-link to="webDesign" class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:outline-none">
              Learn more
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </router-link>
          </div>
        </div>

        <div class="w-full h-full bg-white border border-gray-200 rounded-2xl shadow">
          <a href="#">
            <img class="
                          rounded-t-2xl w-full
                          md:h-48
                          lg:h-52
                          xl:h-64
                        "
                 src="/src/assets/digital-marketing-company.jpeg" alt=""
            />
          </a>
          <div class="p-5 md:p-4 xl:p-6">
            <h5 class="font-bold  text-gray-900 text-xl
                        md:mb-1 md:text-lg
                        lg:text-xl
                        xl:mb-3 xl:text-2xl
                      "
            >
              Bringing certainty into your marketing
            </h5>
            <p class="font-normal text-gray-500 text-xs my-3
                        lg:mt-3 lg:mb-5
                        xl:my-5 xl:text-sm
                      "
            >
              We build online dominance for businesses like yours. We use competitive data from forecast,
              installing reliable tracking, and offering best-in-class strategic service.
            </p>
            <router-link to="socialMedia" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:outline-none">
              Learn more
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
<!--What we do section ends-->

<!--Why Us section starts-->
    <section class="py-10 px-8 md:p-16 lg:p-20 xl:p-24">
      <div class="grid place-content-center mb-14">
        <h1 class="text-3xl text-gray-900">
          Why Us
        </h1>
        <span class="grid w-full place-items-center">
          <line class="flex border border-red-500 w-12 h-1 bg-red-500 mt-2"></line>
        </span>
      </div>

      <div class="grid gap-5">
        <div class="md:flex md:justify-center md:align-middle bg-white border border-gray-200 rounded-2xl shadow-lg">
          <div class="w-full md:w-1/2">
            <img class="w-full rounded-t-2xl md:h-full md:rounded-l-2xl md:rounded-tr-none" src="/src/assets/innovative.jpg" alt="">
          </div>
          <div class="w-full p-5 md:w-1/2 text-gray-500  md:px-8 md:py-4 xl:p-10">
            <small>
              Gain Digital Advantage
            </small>
            <h2 class="text-2xl mb-2 text-black">
              Innovative strategies
            </h2>
            <p class="text-xs md:text-xs xl:text-sm">
              We remove the strives associated with online marketing so you can focus on
              satisfying your customers and business growth. <br>
              We choose to limit our work to a few number of clients each month because of our
              limited number of experts. With this, we have delivered remarkable Return On
              Investment and have achieved high client retention.
              <span class="block mt-2">
                This have drove in success for all of our campaigns and bring in quality leads.
                Our work has also led to immerse growth for our clients.
              </span>
            </p>
          </div>
        </div>

        <div class="md:flex md:flex-row-reverse md:justify-center md:align-middle bg-white border border-gray-200 rounded-2xl shadow-lg">
          <div class="w-full md:w-1/2">
            <img class="w-full rounded-t-2xl  md:h-full md:rounded-r-2xl md:rounded-tl-none" src="/src/assets/strategic.jpg" alt="">
          </div>
          <div class="w-full p-5 md:w-1/2 text-gray-700  md:px-8 md:py-4 xl:p-10">
            <small>
              Results-Oriented Solutions
            </small>
            <h2 class="text-2xl mb-2 text-black">
              Strategic insights
            </h2>
            <p class="text-xs md:text-xs lg:text-sm">
              We specialize in refining your unique value proposition or crafting one
              if it's not yet defined. Subsequently, we skillfully convey these values
              to your audience in easily comprehensible ways. Our strategy leverages
              the valuable insights we've gathered about your audience to create
              irresistible offers that capture their attention and engagement.
            </p>
          </div>
        </div>

        <div class="md:flex md:justify-center md:align-middle bg-white border border-gray-200 rounded-2xl shadow-lg">
          <div class="w-full md:w-1/2">
            <img class="w-full rounded-t-2xl md:h-full md:rounded-l-2xl md:rounded-tr-none" src="/src/assets/tactics.jpg" alt="">
          </div>
          <div class="w-full p-5 md:w-1/2 text-gray-700  md:px-8 md:py-4 xl:p-10">
            <small>
              The Tacticians
            </small>
            <h2 class="text-2xl mb-2 text-black">
              Personalized tactics
            </h2>
            <p class="text-xs md:text-xs lg:text-sm">
              Bloom Height team is creative, communicative, business savvy, prominent in
              tech and accountable. We will fully immerse our tactics into your business model.
              So, we will make sure to use every internet and digital channels to help you
              keep customers and gain new ones.
              <span class="block mt-10">
                JOIN US ASAP!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
<!--Why Us section ends-->

<!--Our Clients section starts -->
    <clients />
<!--Our Clients section ends-->

</template>

<style scoped>

</style>
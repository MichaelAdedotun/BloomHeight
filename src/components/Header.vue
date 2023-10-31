<template>

     <header class=" bg-white border-b-2 border-b-gray-500 sticky top-0 px-5 py-0
                    md:px-8
                    lg:px-14
                    xl:px-20
                  "
     >
       <nav class="flex justify-between items-center relative">
         <div class="">
           <router-link to="/" class="flex justify-center items-center">
             <img class="h-16 md:h-24" src="/src/assets/BLOOM_HEIGHT_LOGO.png" alt="Bloom Height logo">
             <h1>
               <span class="text-red-500 underline text-lg md:text-2xl font-bold">Bloom Height</span>
               <span class="block text-xs md:text-sm">Building a Digital Africa</span>
             </h1>
           </router-link>
         </div>

         <ul class=" hidden
                    md:flex md:justify-between md:items-center
                  "
         >
           <li class="md:mr-10">
             <router-link to="/" class="hover:text-red-500">
               Home
             </router-link>
           </li>
           <li class="md:mr-1">
             <router-link to="/about" class="hover:text-red-500">
               About
             </router-link>
           </li>
           <li class="md:mr-1">
             <div class="group relative cursor-pointer py-2 hover:text-red-500">
               <div class="flex items-center mx-10">
                 <a
                     class="menu-hover my-4 md:mx-3"
                     onClick=""
                 >
                   Services
                 </a>
                 <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        stroke-width="1"
                        stroke="currentColor"
                        class="h-4 w-4"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                 </span>
               </div>
               <div
                   class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-700 shadow-xl group-hover:visible"
                   onClick=""
               >
                 <a
                     class="my-2 block border-b border-gray-100 py-1  text-gray-900 hover:text-red-500 md:mx-2"
                 >
                   <router-link to="/webDesign">Web Design</router-link>
                 </a>

                 <a
                     class="my-2 block border-b border-gray-100 py-1  text-gray-900 hover:text-red-500 md:mx-2"
                 >
                   <router-link to="/businessBranding">Business Branding</router-link>
                 </a>

                 <a
                     class="my-2 block border-b border-gray-100 py-1 text-gray-900 hover:text-red-500 md:mx-2"
                 >
                   <router-link to="/socialMedia">Social Media Marketing</router-link>
                 </a>
               </div>
             </div>
           </li>
           <li class="">
             <router-link to="/contact" class="hover:text-red-500">
               Contact
             </router-link>
           </li>
         </ul>

         <div class="text-3xl md:hidden" @click="open">
           <button><i class="fa-solid fa-bars"></i></button>
         </div>

         <div class="hidden md:block">
           <router-link to="/contact" class="border border-gray-600 rounded-2xl py-1 px-3 hover:bg-red-500 hover:text-white hover:border-none">
             Get Started
           </router-link>
         </div>
       </nav>
     </header>

     <div class="fixed bg-gray-950 text-gray-300 w-screen z-10" v-show="option">
       <ul class="p-8
                  md:hidden
                "
       >
         <li class="pl-5 pb-3 border-b border-b-gray-700 mb-3">
           <router-link to="/" class="hover:text-red-500" @click="close()">
             Home
           </router-link>
         </li>
         <li class="pl-5 pb-3 border-b border-b-gray-700 mb-3">
           <router-link to="/about" class="hover:text-red-500" @click="close()">
             About
           </router-link>
         </li>
         <li class="pl-5 pb-3 border-b border-b-gray-700 mb-3">
           <div class="group relative cursor-pointer hover:text-red-500">
             <div class="flex items-center">
               <a
                   class="menu-hover"
                   onClick=""
               >
                 Services
               </a>
               <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        stroke-width="1"
                        stroke="currentColor"
                        class="h-4 w-4"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                 </span>
             </div>
             <div
                 class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-700 shadow-xl group-hover:visible"
                 onClick=""
             >
               <a
                   class="my-2 block border-b border-gray-100 py-1  text-gray-900 hover:text-red-500 md:mx-2"
               >
                 <router-link to="/webDesign" @click="close()">Web Design</router-link>
               </a>

               <a
                   class="my-2 block border-b border-gray-100 py-1  text-gray-900 hover:text-red-500 md:mx-2"
               >
                 <router-link to="/businessBranding" @click="close()">Business Branding</router-link>
               </a>

               <a
                   class="my-2 block border-b border-gray-100 py-1 text-gray-900 hover:text-red-500 md:mx-2"
               >
                 <router-link to="/socialMedia" @click="close()">Social Media Marketing</router-link>
               </a>
             </div>
           </div>
         </li>
         <li class="pl-5 pb-3 border-b border-b-gray-700 mb-3">
           <router-link to="/contact" class="hover:text-red-500" @click="close()">
             Contact
           </router-link>
         </li>
       </ul>
     </div>


</template>

<script>
export default {
  name: "Header",

  data(){
    return{
      option: false
    }
  },

  methods: {
      open(){
        this.option = true
      },
      close(){
        this.option = false
      }
  }
}
</script>

<style scoped>

</style>
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite:{
    plugins:[
      tailwindcss()
    ]

  },
  app:{
    head:{
      htmlAttrs:{
        lang:'en'
      }
    }
  },
  css:["~/assets/app.css"],
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'reka-ui/nuxt',
    '@nuxtjs/supabase'
  ],
  supabase:{
    redirect:false,
  },

})
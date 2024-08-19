import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  future: {
    typescriptBundlerResolution: false
  },

  router: {
    options: {
      hashMode: false,
      scrollBehaviorType: 'smooth'
    }
  },

  devtools: { enabled: true },

  modules: [
    "@hypernym/nuxt-gsap",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
    "@nuxtjs/google-fonts",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper"
  ],

  gsap: {
    // Options @hypernym/nuxt-gsap
    extraPlugins: {
      flip: true,
      scrollTrigger: true,
      observer: true,
      scrollTo: true,
      text: true
    }
  },

  image: {
    // Options @nuxt/image
  },

  colorMode: {
    // Options @nuxtjs/color-mode
    preference: 'light',
    fallback: 'light'
  },

  device: {
    // Options @nuxtjs/device
    refreshOnResize: true
  },

  googleFonts: {
    // Options @nuxtjs/google-fonts
    prefetch: true,
    preload: false,
    useStylesheet: false,
    display: 'auto',
    families: {
      Nunito: true,
      'Mr+Dafoe': true,
      'Anton+SC': true,
    }
  },

  site: {
    // Options @nuxtjs/seo
    url: 'https://localhost:3000/',
    name: 'Naïdi',
    description: 'Site de Naïdi Tattoo !',
    trailingSlash: true,
  },

  tailwindcss: {
    // Options @nuxtjs/tailwindcss
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: './tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {
      /* Extend the Tailwind config here */
      theme: {
        extend: {
          screens: {
            'xs': '320px',
            'xs2': '375px',  
            'xs3': '425px',
          }
        }
      },
      content: [
        'content/**/**.md'
      ]
    },
    viewer: true,
    editorSupport: true
  },

  compatibilityDate: '2024-08-03'
})
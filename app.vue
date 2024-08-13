<script setup lang="ts">
  import { _backgroundColor, type _borderWidth } from '#tailwind-config/theme'
  const { $gsap } = useNuxtApp()
  const colorMode = useColorMode()
  const color = computed(() => colorMode.value === 'dark' ? '#000000' : 'white')
  const { isMobile, isTablet, isDesktop, isSafari, isChrome } = useDevice()

  const title = 'Naïdi.tattoo'
  const description = "Tatoueuse sur Toulouse et passionnée par l'art du tatouage depuis des années, je mets mon expertise et ma créativité au service de vos envies !"


  useHead({
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { key: 'theme-color', name: 'theme-color', content: color }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'fr'
    }
  })

  useSeoMeta({
    title: title,
    description: description,
    ogTitle: title,
    ogDescription: description,
    ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    twitterCard: 'summary_large_image'
  })
  
  onMounted(() => { 
    if(isDesktop) {
      $gsap.to('.gsap-loading', { borderWidth: 0, duration: 3 })
      $gsap.to('.gsap-blur', { 'webkitFilter': 'blur(0px)', duration: 3 })
      $gsap.to('.gsap-border', { duration: 1, borderWidth: 4, delay: 3 })
      $gsap.to('.gsap-opacity', { duration: 1, opacity: 1, marginTop: "0%", delay: 3 })
      $gsap.to('.gsap-img', { duration: 1, opacity: 1, delay: 2 })

      $gsap.set(".ball", {xPercent: -50, yPercent: -50})
      $gsap.set(".cursor", {xPercent: -50, yPercent: -50})
        const ball = document.querySelector(".ball")
        const ball2 = document.querySelector(".cursor")
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        const pos2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        const mouse = { x: pos.x, y: pos.y }
        const mouse2 = { x: pos.x, y: pos.y }
        const speed = 0.15
        const speed2 = 0.35
        const xSet = $gsap.quickSetter(ball, "x", "px")
        const xSet2 = $gsap.quickSetter(ball2, "x", "px")
        const ySet = $gsap.quickSetter(ball, "y", "px")
        const ySet2 = $gsap.quickSetter(ball2, "y", "px")

      window.addEventListener("mousemove", e => {    
        mouse.x = e.x
        mouse.y = e.y
        mouse2.x = e.x
        mouse2.y = e.y
      })
      $gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, $gsap.ticker.deltaRatio())
        const dt2 = 1.0 - Math.pow(1.0 - speed2, $gsap.ticker.deltaRatio())
          pos.x += (mouse.x - pos.x) * dt
          pos2.x += (mouse2.x - pos2.x) * dt2
          pos.y += (mouse.y - pos.y) * dt
          pos2.y += (mouse2.y - pos2.y) * dt2
        xSet(pos.x)
        xSet2(pos2.x)
        ySet(pos.y)
        ySet2(pos2.y)
      })
    }
    if(isTablet) {
      $gsap.to('.gsap-loading', { borderWidth: 0, duration: 3 })
      $gsap.to('.gsap-blur', { 'webkitFilter': 'blur(0px)', duration: 3 })
      $gsap.to('.gsap-border', { duration: 1, borderWidth: 4, delay: 3 })
      $gsap.to('.gsap-opacity', { duration: 1, opacity: 1, marginTop: "0%", delay: 3 })
      $gsap.to('.gsap-img', { duration: 1, opacity: 1, delay: 2 })
    }
    if(isMobile) {
      $gsap.to('.gsap-loading', { borderWidth: 0, duration: 3 })
      $gsap.to('.gsap-blur', { 'webkitFilter': 'blur(0px)', duration: 3 })
      $gsap.to('.gsap-border', { duration: 1, borderWidth: 4, delay: 3 })
      $gsap.to('.gsap-opacity', { duration: 1, opacity: 1, marginTop: "0%", delay: 3 })
      $gsap.to('.gsap-img', { duration: 1, opacity: 1, delay: 2 })
    }

  })
</script>

<template>
    <div id="naidiAPP" class="select-none ">
      <NuxtRouteAnnouncer>
        <template #default="{ message }">
          <p>{{ message }} was loaded.</p>
        </template>
      </NuxtRouteAnnouncer>

      <NuxtLoadingIndicator :color="'black'" :height="100" :duration="10000" />

      <section id="loading" class="overflow-hidden opacity-1 z-[50]">
          <div class="absolute w-full h-screen grid items-center justify-center z-[0] dark:invert">
              <img 
                src="/intro.png" 
                class=" scale-2 gsap-img opacity-0 mx-auto -mt-[0vh] lg:-ml-[15vw] w-full" 
              />
          </div>
          <div class="gsap-loading w-full h-screen bg-transparent border-white dark:border-black border-[50px] lg:border-[100px] p-[50px] lg:p-[100px] grid grid-cols-1 lg:grid-cols-12 items-center z-[10] select-none" 
          >
              <span 
                class="lg:pt-0 pt-10 opacity-0 gsap-opacity col-span-3 font-nunito text-left flex flex-col mt-[100%] overflow-y-hidden text-black dark:text-white"
              >
                <b>LOADING</b> 
                100%
              </span>
              <div 
                class="gsap-border bg-white/20 dark:bg-black/20 backdrop-blur  col-span-6 border-0 border-stone-300 py-20 dark:border-white flex flex-col" 
                data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" 
                style="transform-style: preserve-3d; transform: perspective(1000px);"
              >
                  <h1 
                  class="gsap-blur blur-[500px] font-antonsc text-[16vw] text-center text-black dark:text-white z-40]" 
                  style="transform: translateZ(200px)"
                >
                  NAÏDI
                </h1>
                  <span 
                    class="opacity-0 gsap-opacity mx-auto w-[600px] text-right text-sm font-nunito uppercase -mt-0 z-[50] text-black dark:text-white"
                    style="transform: translateZ(150px)"
                  >
                    Bienvenue sur mon site
                  </span>
              </div>
              <span 
                class="opacity-0 gsap-opacity col-span-3 font-nunito text-right flex flex-col mt-[100%] uppercase text-black dark:text-white"
              >
                <b>TATTOO ARTISTE</b> basée sur Toulouse
              </span>
          </div>
      </section>

      <NuxtPage />

      <section id="assets">
        <div id="cursor" class="z-[-1] absolute">
            <svg class="ball w-[100px] h-[100px] fixed top-0 left-0 " height="100" width="100">
              <circle class="noise" cx="50" cy="50" r="40" stroke="text-teal" stroke-width="1" fill="transparent" />
            </svg> 
            <svg class="cursor w-[100px] h-[100px] fixed top-0 left-0 " height="100" width="100">
              <circle cx="50" cy="50" r="5" stroke="text-teal" stroke-width="1" fill="transparent" />
            </svg> 
        </div>
        <div class="z-[-2] fixed top-0 bg-white dark:bg-black h-screen w-screen ">
          <div class="bg-[url('/noise.gif')] h-full w-full opacity-1 opacity-[0.10] dark:opacity-[0.20]" />

        </div>
        <svg class="svg-filter bg-black">
          <defs>
            <filter id="pixelateMin"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
              filterUnits="objectBoundingBox"
            >
              <feTurbulence
                id="feTurbulenceMin"
                type="fractalNoise"
                baseFrequency="0.0006"
                numOctaves="1"
                seed="8"
                stitchTiles="noStitch"
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="fractalNoise"
                scale="20"
                xChannelSelector="R"
                yChannelSelector="G"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                filterUnits="userSpaceOnUse"
              />
              <animate
                xlink:href="#feTurbulenceMin"
                attributeName="baseFrequency"
                dur="10000s"
                keyTimes="0;0.5;1"
                values="10;5.1;10;"
                repeatCount="indefinite"
              />
            </filter>
            <filter id="noise">
              <feOffset
                in="SourceGraphic"
                dx="-2"
                dy="-2"
                result="offset"
              />
              <feGaussianBlur
                in="offset"
                stdDeviation="0,01"
                result="blur"
              />
              <feTurbulence
                result="waves"
                type="turbulence"
                baseFrequency="0.735 0.771"
                numOctaves="1"
                seed="2"
              />
              <feDisplacementMap
                in="blur"
                in2="waves"
                scale="10"
                xChannelSelector="R"
                yChannelSelector="B"
                result="ripples"
              />
              <feComposite
                in="waves"
                in2="ripples"
                operator="arithmetic"
                k1="1"
                k2="0"
                k3="1"
                k4="0"
              />
            </filter>
          </defs>
        </svg>
      </section>

    </div>
</template>

<style lang="postcss">
  .svg-filter{ @apply invisible w-0 h-0}
  .pixelateMin { @apply w-auto; filter:url(#pixelateMin);}
  .noise { @apply w-auto; filter:url(#noise);}

  .noised { @apply w-auto; filter:url(#noise);}
  .font-mrdafoe {
    font-family: "Mr Dafoe", cursive;
    font-weight: 400;
    font-style: normal;
  }
  .font-nunito {
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
  .font-antonsc {
    font-family: "Anton SC", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .light-mode .landing-grid {
    background-size: 3.33px 3.33px;
    background-image:
      linear-gradient(to right, rgb(75, 75, 75) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(75, 75, 75) 1px, transparent 1px);
  }
  .light-mode .animate-landing-grid {
    animation: bouncing-grid 2s infinite;
    background-size: 3.33px 3.33px;
    background-image:
      linear-gradient(to right, rgb(75, 75, 75) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(75, 75, 75) 1px, transparent 1px);
  }

  .dark-mode .landing-grid {
    background-size: 3.33px 3.33px;
    background-color: black;
    background-image:
      linear-gradient(to right, rgb(53, 53, 53) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(53, 53, 53) 1px, transparent 1px);
  }
  .dark-mode .animate-landing-grid {
    animation: bouncing-grid 2s infinite;
    background-color: black;
    background-size: 3.33px 3.33px;
    background-image:
      linear-gradient(to right, rgb(53, 53, 53) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(53, 53, 53) 1px, transparent 1px);
  }

  @keyframes bouncing-grid {
    0% {
      background-size: 3.30px 3.30px;
      animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
    }
    50% {
      background-size: 3.33px 3.33px;
      animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
    }
    100% {
      background-size: 3.30px 3.30px;
      animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
    }
  }
</style>

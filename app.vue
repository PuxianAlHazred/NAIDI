<script setup lang="ts">
  import { _backgroundColor, type _borderWidth } from '#tailwind-config/theme';
  const loadings = ref(true)
  const colorMode = useColorMode()
  const { $gsap } = useNuxtApp()
  const color = computed(() => colorMode.value === 'dark' ? '#000000' : 'white')

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
  const title = 'Naïdi.tattoo'
  const description = "Tatoueuse sur Toulouse et passionnée par l'art du tatouage depuis des années, je mets mon expertise et ma créativité au service de vos envies !"

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    twitterCard: 'summary_large_image'
  })
  
  function animetest() {
      $gsap.to('.gsap-loading', { 
          height: 0, 
          padding: 0,
          duration: 1,
          delay: 3   
      })
      $gsap.to('#loading', { 
          height: 0, 
          duration: 2,
          delay: 1,
          y: -400
      })
      $gsap.to('.gsap-blur', { 
          'webkitFilter': 'blur(300px)',
          duration: 3,     
      })
      $gsap.to('.gsap-border', { 
          duration: 1,  
          borderWidth: 0,  
          delay: 1  
      })
      $gsap.to('.gsap-opacity', { 
          duration: 1,  
          opacity: 1,  
          marginTop: "100%",
          delay: 2  
      })
      $gsap.to('.gsap-img', { 
          duration: 1,  
          opacity: 0,  
          delay: 1  
      })
      setTimeout(() => {
          loadings.value = false
      }, 600);  
  }

  onMounted(() => { 
    $gsap.to('.gsap-loading', { 
        borderWidth: 0, 
        duration: 3,
    })
    $gsap.to('.gsap-blur', { 
        'webkitFilter': 'blur(0px)',
        duration: 3,     
    })
    $gsap.to('.gsap-border', { 
        duration: 1,  
        borderWidth: 4,  
        delay: 3  
    })
    $gsap.to('.gsap-opacity', { 
        duration: 1,  
        opacity: 1,  
        marginTop: "0%",
        delay: 3  
    })
    $gsap.to('.gsap-img', { 
        duration: 1,  
        opacity: 1,  
        delay: 2  
    })

    $gsap.set(".ball", {xPercent: -50, yPercent: -50})
      const ball = document.querySelector(".ball")
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      const mouse = { x: pos.x, y: pos.y }
      const speed = 0.15
      const xSet = $gsap.quickSetter(ball, "x", "px")
      const ySet = $gsap.quickSetter(ball, "y", "px")
      window.addEventListener("mousemove", e => {    
        mouse.x = e.x
        mouse.y = e.y
      })
      $gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, $gsap.ticker.deltaRatio()); 
        pos.x += (mouse.x - pos.x) * dt
        pos.y += (mouse.y - pos.y) * dt
        xSet(pos.x)
        ySet(pos.y)
      })

    $gsap.set(".cursor", {xPercent: -50, yPercent: -50})
      const ball2 = document.querySelector(".cursor")
      const pos2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      const mouse2 = { x: pos.x, y: pos.y }
      const speed2 = 0.35
      const xSet2 = $gsap.quickSetter(ball2, "x", "px")
      const ySet2 = $gsap.quickSetter(ball2, "y", "px")
      window.addEventListener("mousemove", e => {    
        mouse2.x = e.x
        mouse2.y = e.y
      })
      $gsap.ticker.add(() => {
        const dt2 = 1.0 - Math.pow(1.0 - speed2, $gsap.ticker.deltaRatio()); 
        pos2.x += (mouse2.x - pos2.x) * dt2
        pos2.y += (mouse2.y - pos2.y) * dt2
        xSet2(pos2.x)
        ySet2(pos2.y)
      })
  })
</script>

<template>
  <div id="naidiAPP">
    <NuxtRouteAnnouncer />

    <div id="cursor">
      <svg class="ball w-[100px] h-[100px] fixed top-0 left-0 z-[0]" height="100" width="100">
        <circle class="noise" cx="50" cy="50" r="40" stroke="black" stroke-width="1" fill="transparent" />
      </svg> 
      <svg class="cursor w-[100px] h-[100px] fixed top-0 left-0 z-[0]" height="100" width="100">
        <circle cx="50" cy="50" r="5" stroke="black" stroke-width="1" fill="transparent" />
      </svg> 
    </div>
    
    <section id="loading" class="overflow-hidden opacity-1 z-[50] fixed top-0  w-screen h-screen">
        <div class="absolute w-full h-screen z-[0]">
            <NuxtImg src="intro.png" class="gsap-img opacity-0 mx-auto noise -mt-[0vh] -ml-[15vw]" height="1800" width="1440" loading="lazy" />
        </div>
        <div class="gsap-loading w-full h-screen bg-transparent border-white border-[100px] p-[100px] grid grid-cols-12 items-center z-[10]" >
            <span class="opacity-0 gsap-opacity col-span-3 font-nunito text-left flex flex-col mt-[100%] overflow-y-hidden"><b>LOADING</b> 0%</span>
            <div class="gsap-border bg-transparent col-span-6 border-0 border-stone-300 py-20  flex flex-col"  @click="animetest()" data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" style="transform-style: preserve-3d; transform: perspective(1000px);">
                <h1 class="gsap-blur blur font-antonsc text-[16vw] text-center text-black z-40]" style="transform: translateZ(200px)">NAÏDI</h1>
                <span class="opacity-0 gsap-opacity mx-auto w-[600px] text-right text-sm font-nunito uppercase underline -mt-0 z-[50]">Enter sur le site</span>
            </div>
            <span class="opacity-0 gsap-opacity col-span-3 font-nunito text-right flex flex-col mt-[100%] uppercase"><b>TATTOO ARTISTE</b> basée sur Toulouse</span>
        </div>
    </section>
    <NuxtPage v-if="loadings === false" />

    <div class="pixelateMin fixed top-0 z-[-1]">
      <div class="animate-landing-grid h-screen w-screen  opacity-[0.2]"></div>
    </div>
    <svg class="svg-filter">
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
  </div>
</template>

<style lang="postcss">
.svg-filter{ @apply invisible w-0 h-0}
.pixelateMin { @apply w-auto;filter:url(#pixelateMin);}
.noise { @apply w-auto;filter:url(#noise);}

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
.landing-grid {
  background-size: 3.33px 3.33px;
  background-image:
    linear-gradient(to right, rgb(0, 0, 0) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(0, 0, 0) 1px, transparent 1px);
}
.animate-landing-grid {
  animation: bouncing-grid 2s infinite;
  background-size: 3.33px 3.33px;
  background-image:
    linear-gradient(to right, rgb(75, 75, 75) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(75, 75, 75) 1px, transparent 1px);
}
@keyframes bouncing-grid {
  0% {
    background-size: 3px 3px;
    animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
  }
  50% {
    background-size: 3.33px 3.33px;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  100% {
    background-size: 3px 3px;
    animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
  }
}
</style>

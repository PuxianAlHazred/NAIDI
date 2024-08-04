<script setup lang="ts">
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
  const description = 'Tatoueuse sur Toulouse'

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    twitterCard: 'summary_large_image'
  })
  
  onMounted(() => { 
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
    
    <Loading />

    <NuxtPage />

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

</style>

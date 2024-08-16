<script setup lang="ts">
    import type { _backgroundColor, _height } from '#tailwind-config/theme';
    import VanillaTilt from 'vanilla-tilt';

    const { $gsap, $scrollTo, $ScrollTrigger } = useNuxtApp()
    const colorMode = useColorMode()
    const color = computed(() => colorMode.value === 'dark' ? '#000000' : 'white')

    const { isMobile, isTablet, isDesktop, isSafari, isChrome } = useDevice()
    const test = ref('')
    const menu = ref(false)
    const optionIntro = {
        scrub: 1,
        trigger: "#intro",
        start: "top",
        endTrigger: "#introContent",
        end: "bottom",
        markers: false,
    }
    function scrollTo(e: any) {
        $gsap.to(window, { duration: 2, scrollTo: e })
        test.value = e
    }
    function switchG() {
        if(menu.value === true) {
            $gsap.to("#navigation", { height: '100vh' })

        } else {
            $gsap.to("#navigation", { height: '5rem' })
        }
    }
    function scrollTo2(e: any) {
        $gsap.to(window, { duration: 2, scrollTo: e })
        test.value = e
        menu.value = !menu.value
        if(menu.value === true) {
            $gsap.to("#navigation", { height: '100vh' })

        } else {
            $gsap.to("#navigation", { height: '5rem' })
        }
    }
    onMounted(() => { 
        $gsap.registerPlugin($scrollTo)
        $gsap.registerPlugin($ScrollTrigger)
        setTimeout(() => {
            scrollTo('#intro')
        }, 7000);
        if(isDesktop) { 
            console.log(isDesktop)
            $gsap.to(".colImage", { scrollTrigger: optionIntro, opacity: 0 })
            $gsap.to(".colTitre", { scrollTrigger: optionIntro, y: 50, color:"#000" })
            $gsap.to(".colCTA", { scrollTrigger: optionIntro, y: 350 })
            $gsap.to("#navigation", { scrollTrigger: optionIntro, opacity: 1,  duration: 1, delay: 9  }) 
        }
        if(isTablet) {
        }
        if(isMobile) {
            console.log(isMobile)
            $gsap.to("#navigation", { opacity: 1,  duration: 1, delay: 9 }) 
            $gsap.to("#navigation a span", { opacity: 1,  duration: 1, delay: 1 }) 

        }

        if(colorMode.value === 'light') {
            $gsap.to("#intro", {
                scrollTrigger: {
                    scrub: 1,
                    trigger: "#intro",
                    start: "top+=300",
                    endTrigger: "#introContent",
                    end: "bottom",
                    markers: false,
                },
                background: 'rgb(214 211 209)'
            })
        }
        if(colorMode.value === 'dark') {
            $gsap.to("#intro", {
                scrollTrigger: {
                    scrub: 1,
                    trigger: "#intro",
                    start: "top+=300",
                    endTrigger: "#introContent",
                    end: "bottom",
                    markers: false,
                },
                background: 'rgb(15 118 110)'
            })
        }
    })
</script>

<template>
    <section>
        <header id="intro" 
            class="h-full w-full bg-transparent"
        >
            <div id="introContent" 
                class="
                    grid h-full z-[10]
                       grid-cols-1     p-10 
                    lg:grid-cols-12 lg:p-20 lg:h-screen
                "
            >
                <div 
                    class="
                        text-black dark:text-white
                        colTitre col-span-2 flex flex-col items-center 
                           justify-center py-40
                        md:justify-center md:py-40 md:text-black md:dark:text-white 
                        lg:justify-end lg:py-0 lg:text-white lg:dark:text-black lg:items-start
                    "
                >
                    <h1 
                        class="
                            absolute font-antonsc text-center pixelateMin
                               text-[43vw] leading-[42vw] mt-20 
                            md:text-[23vw] md:leading-[23vw] md:mt-20
                            lg:text-[16vw] lg:leading-[15vw] lg:mt-0
                        "
                    >
                        NAÏDI
                    </h1>
                </div>
                <div 
                    class="
                        text-black dark:text-white
                        colCTA col-span-8 flex flex-col justify-center
                        lg:-mt-40 lg:-mr-20 
                    "
                >
                    <div 
                        class="
                            flex flex-col pb-0 w-full font-nunito 
                            lg:p-20
                        "
                    >
                        <p 
                            class="
                                text-justify uppercase text-sm
                                md:px-20 md:text-center 
                                lg:px-0 lg:text-center 
                            "
                        >
                            Passionnée par l'art du <b>tatouage</b> depuis des années, je mets mon expertise et ma créativité au service de vos envies !
                        </p>
                        <a class="
                                text-black dark:text-white 
                                hover:bg-stone-300 
                                mx-auto mt-6 border-4 border-stone-300 text-3xl py-3 px-6 animate-pulse font-mrdafoe w-full text-center
                                md:w-[300px]
                            "
                        >
                            Prendre contact
                        </a>
                    </div>
                </div>
                <div class="col-span-2 flex flex-col justify-between z-[10] text-black dark:text-white">
                    <div class="flex flex-col-2 lg:justify-end lg:items-start justify-center items-center sticky top-20 mb-0 lg:mb-20 lg:mt-0 mt-20">
                        <nav class="font-nunito text-right pr-3 flex flex-col uppercase h-[130px] justify-between">
                            <NuxtLink :class="{ 'font-bold underline': test === '#intro' }"
                                :to="{ hash: '#intro'}" 
                                class="lg:block hidden hover:underline hover:font-bold uppercase" 
                                @click="scrollTo('#intro')"
                            >
                                Accueil
                            </NuxtLink>
                            <NuxtLink :class="{ 'font-bold underline': test === '#aboutus' }" 
                                :to="{ hash: '#aboutus'}"     
                                class="lg:block hidden hover:underline hover:font-bold uppercase" 
                                @click="scrollTo('#aboutus')"
                            >
                                Qui suis-je ?
                            </NuxtLink>
                            <NuxtLink :class="{ 'font-bold underline': test === '#works' }" 
                                :to="{ hash: '#works'}"     
                                class="lg:block hidden hover:underline hover:font-bold uppercase" 
                                @click="scrollTo('#works')"
                            >
                                Portfolio
                            </NuxtLink>
                            <NuxtLink :class="{ 'font-bold underline': test === '#health' }" 
                                :to="{ hash: '#health'}"         
                                class="lg:block hidden hover:underline hover:font-bold uppercase" 
                                @click="scrollTo('#health')"
                            >
                                Les Soins
                            </NuxtLink>
                            <NuxtLink :class="{ 'font-bold underline': test === '#atelier' }" 
                                :to="{ hash: '#atelier'}"         
                                class="lg:block hidden hover:underline hover:font-bold uppercase" 
                                @click="scrollTo('#atelier')"
                            >
                                Atelier
                            </NuxtLink>
                        </nav>
                        <div>
                            <NuxtImg src="logo-black.png" width="50px" height="130px" class="dark:invert"  />
                        </div>
                    </div>
                    <span class="text-sm col-span-1 font-nunito lg:text-right text-center flex flex-col uppercase lg:mb-0 mb-10"><b>TATTOO ARTISTE</b> basée sur Toulouse</span>
                </div>
            </div>
            <div class="colImage absolute w-full h-screen z-[-1] dark:invert lg:opacity-100 opacity-0 lg:block hidden">
                <NuxtImg src="test-1.png" class="ml-auto noise -mt-[100vh] mr-40" height="800" data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);"/>
            </div>
        </header>
        <nav 
            id="navigation" 
            class="
                border-black dark:border-black text-black bg-white/50 dark:bg-black/50
                h-20 w-full font-nunito fixed top-0 backdrop-blur flex flex-col z-[40]  
                   mix-blend-none    px-0     opacity-1    border-b      text-sm
                md:mix-blend-none md:px-10 md:opacity-0 md:border-b   md:text-md
                lg:mix-blend-none lg:px-20 lg:opacity-0 lg:border-b-2 lg:text-md
            "
            :class="{ 
                'items-center justify-center': !menu, 
                'items-center pt-6': menu 
            }"
        >
            <div 
                class="
                    flex justify-between w-full
                       px-10 
                    md:px-0 
                    lg:px-0 
                " 
                :class="{ 
                    'items-center': !menu, 
                    'items-end': menu 
                }"
            >
                <h6 
                    @click="scrollTo('#intro')" 
                    class="
                        text-black dark:text-white
                        font-mrdafoe text-left  flex
                        w-[200px] text-3xl
                        md:w-[200px] text-3xl
                        lg:w-[300px] lg:text-[3vw]
                    "
                >
                    naïdi<span class="lg:hidden md:hidden block text-teal-700">tattoo</span>
                </h6>
                <span>
                    <NuxtLink :class="{ 'font-bold underline': test === '#intro' }"
                        :to="{ hash: '#intro'}" 
                        class="lg:block md:block hidden hover:underline hover:font-bold uppercase" 
                        @click="scrollTo('#intro')"
                    >
                        Accueil
                    </NuxtLink>
                </span>
                <span>
                    <NuxtLink :class="{ 'font-bold underline': test === '#aboutus' }" 
                        :to="{ hash: '#aboutus'}"     
                        class="lg:block md:block hidden hover:underline hover:font-bold uppercase" 
                        @click="scrollTo('#aboutus')"
                    >
                        Qui suis-je ?
                    </NuxtLink>
                </span>
                <span>
                    <NuxtLink :class="{ 'font-bold underline': test === '#works' }" 
                        :to="{ hash: '#works'}"     
                        class="lg:block md:block hidden hover:underline hover:font-bold uppercase" 
                        @click="scrollTo('#works')"
                    >
                        Portfolio
                    </NuxtLink>
                </span>
                <span>
                    <NuxtLink :class="{ 'font-bold underline': test === '#health' }" 
                        :to="{ hash: '#health'}"         
                        class="lg:block md:block hidden hover:underline hover:font-bold uppercase" 
                        @click="scrollTo('#health')"
                    >
                        Les Soins
                    </NuxtLink>
                </span>
                <span>
                    <NuxtLink :class="{ 'font-bold underline': test === '#atelier' }" 
                        :to="{ hash: '#atelier'}"         
                        class="lg:block md:block hidden hover:underline hover:font-bold uppercase" 
                        @click="scrollTo('#atelier')"
                    >
                        Atelier
                    </NuxtLink>
                </span>
                <span>
                    <a class="lg:block md:block hidden font-nunito font-bold text-sm" 
                        href="#"
                    >
                        CONTACT
                    </a>
                </span>
                <div @click="menu = !menu, switchG()" class="lg:hidden md:hidden block ">
                    <svg v-if="!menu" width="33px" height="33px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-black dark:stroke-white">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="currentStroke" stroke-linecap="round" stroke-linejoin="round"></path> 
                        </g>
                    </svg>
                    <svg v-if="menu" width="33px" height="33px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-black dark:stroke-white">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M7 17L16.8995 7.10051" stroke="currentStroke" stroke-linecap="round" stroke-linejoin="round"></path> 
                            <path d="M7 7.00001L16.8995 16.8995" stroke="currentStroke" stroke-linecap="round" stroke-linejoin="round"></path> 
                        </g>
                    </svg>
                </div>
            </div>

            <div v-if="menu" class="px-10 flex h-full justify-center items-center w-full">
                <div class="flex justify-center items-center  py-3 px-3 w-full">
                    <nav class="text-sm font-nunito text-center pr-3 flex flex-col uppercase h-auto leading-6 justify-between text-black dark:text-white">
                        <NuxtLink :class="{ 'font-bold underline': test === '#intro' }"
                            :to="{ hash: '#intro'}" 
                            class="hover:underline hover:font-bold uppercase" 
                            @click="scrollTo2('#intro')"
                        >
                            <span>Accueil</span>
                        </NuxtLink>
                        <NuxtLink :class="{ 'font-bold underline': test === '#aboutus' }" 
                            :to="{ hash: '#aboutus'}"     
                            class="hover:underline hover:font-bold uppercase" 
                            @click="scrollTo2('#aboutus')"
                        >
                            <span>Qui suis-je ?</span>
                        </NuxtLink>
                        <NuxtLink :class="{ 'font-bold underline': test === '#works' }" 
                            :to="{ hash: '#works'}"     
                            class="hover:underline hover:font-bold uppercase" 
                            @click="scrollTo2('#works')"
                        >
                            <span>Portfolio</span>
                        </NuxtLink>
                        <NuxtLink :class="{ 'font-bold underline': test === '#health' }" 
                            :to="{ hash: '#health'}"         
                            class="hover:underline hover:font-bold uppercase" 
                            @click="scrollTo2('#health')"
                        >
                            <span>Les Soins</span>
                        </NuxtLink>
                        <NuxtLink :class="{ 'font-bold underline': test === '#atelier' }" 
                            :to="{ hash: '#atelier'}"         
                            class="hover:font-bold uppercase" 
                            @click="scrollTo2('#atelier')"
                        >
                            <span>Atelier</span>
                        </NuxtLink>
                    </nav>
                </div>
            </div>
            <div v-if="menu" class="px-10 pb-10 w-full flex">
                <a  class="w-full text-center border-4 border-stone-300 dark:border-teal-700 text-2xl text-black dark:text-white py-3 px-6 animate-pulse font-antonsc hover:bg-stone-100 bg-white/80 dark:bg-black/80 bg-backdrop">prendre contact</a>
            </div>
        </nav>
    </section>
</template>

<script setup lang="ts">
    import type { _backgroundColor } from '#tailwind-config/theme';
    import VanillaTilt from 'vanilla-tilt';
    const { $gsap, $ScrollTrigger } = useNuxtApp()
    const { isMobile, isTablet, isDesktop, isSafari, isChrome } = useDevice()

    onMounted(() => { 
        $gsap.registerPlugin($ScrollTrigger)
        if(isDesktop) { 
            $gsap.to(".colTitreAtelier", {
                scrollTrigger: {
                    scrub: 1,
                    trigger: "#atelier",
                    start: "top",
                    endTrigger: "#atelierContent",
                    end: "bottom",
                    markers: false,
                },
                y: -100,
            })
            $gsap.to(".colSTitreAtelier", {
                scrollTrigger: {
                    scrub: 1,
                    trigger: "#atelier",
                    start: "top",
                    endTrigger: "#atelierContent",
                    end: "bottom",
                    markers: false,
                },
                y: 50,
            })
        }
        if(isTablet) {
        }
        if(isMobile) {
        }
    })
</script>

<template>
    <section id="atelier" class="h-full w-full bg-transparent">
        <div id="atelierContent"  class="lg:p-20 p-10">
            <div class="grid grid-cols-12 items-center lg:py-0 py-10">
                <div class="lg:col-span-11 col-span-8  h-1 bg-black dark:bg-white pixelateMin" />
                <p class="lg:col-span-1 col-span-4 font-nunito text-black text-sm text-right dark:text-white">ATELIER</p>
            </div>
            <div class="grid grid-cols-1 gap-y-10 lg:pb-40 overflow-hidden">
                <h3 class="colTitreAtelier font-antonsc">Atelier <span>privée</span></h3>
                <div class="mx-auto lg:-mt-40 grid lg:grid-cols-3 grid-cols-1 lg:h-[80vh] justify-center items-center">
                    <div class="flex justify-start w-full lg:pl-20">
                        <Swiper
                            class="swiper-cards lg:mb-0 mb-10 w-full"
                            :width="300"
                            :modules="[SwiperAutoplay, SwiperEffectCards]"
                            :slides-per-view="1"
                            :loop="true"
                            :effect="'cards'"
                            :autoplay="{
                                delay: 3000,
                                disableOnInteraction: false
                            }"
                        >
                            <SwiperSlide class="bg-[url('/naidi-photo-1.jpg')] text-black dark:text-white h-[80vh] bg-black dark:bg-white" style="height: 50vh;">
                                &nbsp;
                            </SwiperSlide>
                            <SwiperSlide class="bg-[url('/naidi-photo-1.jpg')] text-black dark:text-white h-[80vh] bg--black dark:bg-white" style="height: 50vh;">
                                &nbsp;
                            </SwiperSlide>
                            <SwiperSlide class="bg-[url('/naidi-photo-1.jpg')] text-black dark:text-white h-[80vh] bg-black dark:bg-white" style="height: 50vh;">
                                &nbsp;
                            </SwiperSlide>
                            <SwiperSlide class="bg-[url('/naidi-photo-1.jpg')] text-black dark:text-white h-[80vh] bg-black dark:bg-white" style="height: 50vh;">
                                &nbsp;
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class="flex justify-center lg:block hidden z-[5] lg:mb-0 my-10" 
                        data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" 
                        style="transform-style: preserve-3d; transform: perspective(1000px);
                    ">
                        <NuxtImg 
                            v-if="$colorMode.value === 'dark'" 
                            src="logo-white.png"  
                            width="146" height="380" 
                            class="ml-20"  
                            style="transform: translateZ(200px)"
                        />
                        <NuxtImg 
                            v-if="$colorMode.value === 'light'" 
                            src="logo-black.png"  
                            width="146" height="380" 
                            class="ml-20"  
                            style="transform: translateZ(200px)"
                        />  
                    </div>
                    <div class="lg:mt-0 mt-4 font-nunito text-justify text-black dark:text-white text-sm uppercase">
                        <p>Je travaille dans un magnifique atelier privée et confortable proche de toulouse, je fais également des séjours invités dans des conventions.</p>
                        <div class="flex justify-between py-10">
                            <p class="font-bold underline">Adresse de l'atelier</p>
                            <p class="font-bold underline">Prochaines conv.</p>
                        </div>
                        <p>Découvrez l'intégralité de mon travail et restez informé(e) de mes actualités en me suivant sur Instagram.</p>
                    </div>
                </div>
                <h3 class="colSTitreAtelier font-mrdafoe ">sur Toulouse</h3>
            </div>
        </div>
    </section>
</template>

<style scoped lang="postcss">
.colTitreAtelier { @apply text-stone-300 dark:text-teal-700 lg:text-[15vw] text-6xl text-center uppercase flex justify-between;}
.colSTitreAtelier { @apply lg:-mt-10 lg:text-8xl text-6xl lg:mb-0 mb-10 text-center text-black dark:text-white ;}

</style>
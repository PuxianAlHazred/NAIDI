<script setup lang="ts">
    import type { _backgroundColor } from '#tailwind-config/theme';
    import VanillaTilt from 'vanilla-tilt';
    const { $gsap, $ScrollTrigger } = useNuxtApp()
    onMounted(() => { 
        $gsap.registerPlugin($ScrollTrigger)
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
    })
</script>

<template>
    <section id="atelier" class="h-full w-full bg-transparent">
        <div id="atelierContent">
            <div class="grid grid-cols-12 px-20 py-20 items-center">
                <div class="col-span-11 h-1 bg-black dark:bg-white pixelateMin" />
                <p class="col-span-1 font-nunito text-black text-sm text-right dark:text-white">ATELIER</p>
            </div>
            <div class="grid grid-cols-1 gap-y-6 pb-40 px-20">
                <h3 class="colTitreAtelier font-antonsc">Atelier <span>privée</span></h3>
                <div class="mx-auto -mt-40 grid grid-cols-3 h-[80vh] justify-center items-center">
                    <div class="flex justify-start pl-20">
                        <Swiper
                            class="swiper-cards"
                            :width="400"
                            :modules="[SwiperAutoplay, SwiperEffectCards]"
                            :slides-per-view="1"
                            :loop="true"
                            :effect="'cards'"
                            :autoplay="{
                                delay: 8000,
                                disableOnInteraction: true
                            }"
                        >
                            <SwiperSlide class="text-black dark:text-white h-[80vh] bg-teal-700" style="height: 50vh;">
                                &nbsp;
                            </SwiperSlide>
                            <SwiperSlide class="text-black dark:text-white h-[80vh] bg-teal-700" style="height: 50vh;">
                                &nbsp;
                            </SwiperSlide>
                            <SwiperSlide class="text-black dark:text-white h-[80vh] bg-teal-700" style="height: 50vh;">
                                &nbsp;
                            </SwiperSlide>
                            <SwiperSlide class="text-black dark:text-white h-[80vh] bg-teal-700" style="height: 50vh;">
                                &nbsp;
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class="flex justify-center" data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);">
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
                    <div class="font-nunito text-justify text-black dark:text-white text-sm uppercase">
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
.colTitreAtelier { @apply text-stone-300 dark:text-teal-700 text-[15vw] text-center uppercase flex justify-between;}
.colSTitreAtelier { @apply -mt-10 text-8xl text-center text-black dark:text-white ;}

</style>
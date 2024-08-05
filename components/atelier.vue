<script setup lang="ts">
    import type { _backgroundColor } from '#tailwind-config/theme';
    import VanillaTilt from 'vanilla-tilt';
    const { $gsap, $ScrollTrigger } = useNuxtApp()
    onMounted(() => { 
        $gsap.registerPlugin($ScrollTrigger)
        $gsap.to(".colTitre", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#contact",
                start: "top",
                endTrigger: "#contactContent",
                end: "bottom",
                markers: false,
            },
            y: -100,
            opacity: 0
        })
        $gsap.to(".colSTitre", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#contact",
                start: "top",
                endTrigger: "#contactContent",
                end: "bottom",
                markers: false,
            },
            y: 50,
            opacity: 0
        })
    })
</script>

<template>
    <section id="contact" class="h-full w-full bg-transparent">
        <div id="contactContent">
            <div class="grid grid-cols-12 px-20 py-20 items-center">
                <div class="col-span-11 h-1 bg-black pixelateMin" />
                <p class="col-span-1 font-nunito text-black text-sm text-right">ATELIER</p>
            </div>
            <div class="grid grid-cols-1 gap-y-6 pb-40">
                <h3 class="colTitre text-stone-300 font-antonsc text-[15vw] text-center uppercase opacity-1 flex justify-between px-20">Atelier <span>privée</span></h3>
                <div class="mx-auto -mt-40">
                    <NuxtImg src="logo-black.png"  width="146" height="380" class="ml-20"  data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);" />
                </div>
                <h3 class="colSTitre -mt-10 font-mrdafoe text-8xl text-center text-black ml-20">sur Toulouse</h3>
            </div>
        </div>
    </section>
</template>

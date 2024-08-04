<script setup lang="ts">
    import type { _backgroundColor } from '#tailwind-config/theme';
    import VanillaTilt from 'vanilla-tilt';
    const { $gsap, $scrollTo, $ScrollTrigger } = useNuxtApp()

    const test = ref('')
    function scrollTo(e: any) {
        $gsap.to(window, { duration: 2, scrollTo: e })
        test.value = e
    }
    onMounted(() => { 
        $gsap.registerPlugin($ScrollTrigger)
        $gsap.to("#intro", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#intro",
                start: "top",
                endTrigger: "#introContent",
                end: "bottom",
                markers: false,
            },
            background: 'rgb(214 211 209)'
        })
        $gsap.to(".colImage", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#intro",
                start: "top",
                endTrigger: "#introContent",
                end: "bottom",
                markers: false,
            },
            opacity: 0,
        })
        $gsap.to(".colTitre", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#intro",
                start: "top",
                endTrigger: "#introContent",
                end: "bottom",
                markers: false,
            },
            y: 50,
            color:"#000"
        })
        $gsap.to(".colCTA", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#intro",
                start: "top",
                endTrigger: "#introContent",
                end: "bottom",
                markers: false,
            },
            y: 350,
        });
    })
</script>

<template>
    <header id="intro" class="h-screen w-full bg-transparent">
        <div id="introContent" class="grid grid-cols-12 p-20 h-full z-[10]">
            <div class="colTitre col-span-2 flex flex-col justify-end text-teal-700">
                <h1 class="absolute font-antonsc text-[16vw] leading-[15vw] text-center pixelateMin">NAÏDI</h1>
            </div>
            <div class="colCTA col-span-8 flex flex-col justify-center -mt-40 -mr-20">
                <div class="flex flex-col p-20 pb-0 w-full font-nunito ">
                    <p class="text-center uppercase">Passionnée par l'art du <b>tatouage</b> depuis des années,<br> je mets mon expertise et ma créativité<br> au service de vos envies !</p>
                    <a class="mx-auto mt-6 border-4 border-stone-300  text-4xl text-black py-3 px-6 animate-pulse font-mrdafoe hover:bg-stone-300">Prendre contact</a>
                </div>
            </div>
            <div class="col-span-2 flex flex-col justify-between z-[10]">
                <div class="flex flex-col-2 justify-end items-start sticky top-20  mb-20">
                    <nav class="font-nunito text-right pr-3 flex flex-col uppercase h-[130px] justify-between">
                        <a class="underline font-bold" href="#intro">Accueil</a>
                        <a class="hover:underline hover:font-bold" @click="scrollTo('#aboutus')">Qui suis-je ?</a>
                        <a class="hover:underline hover:font-bold" @click="scrollTo('#works')">Portfolio</a>
                        <a class="hover:underline hover:font-bold" @click="scrollTo('#health')">Les Soins</a>
                        <a class="hover:underline hover:font-bold" @click="scrollTo('#contact')">Contact</a>
                    </nav>
                    <NuxtImg src="logo-black.png" loading="lazy" width="50px" height="130px" />
                </div>
                <span class="col-span-1 font-nunito text-right flex flex-col uppercase"><b>TATTOO ARTISTE</b> basée sur Toulouse</span>
            </div>
        </div>
        <div class="colImage absolute w-full h-screen z-[5]">
            <NuxtImg src="test-1.png" class="ml-auto noise -mt-[100vh] mr-40" height="800" loading="lazy" data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);"/>
        </div>
    </header>
</template>

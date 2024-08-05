<script setup lang="ts">
    import type { _backgroundColor } from '#tailwind-config/theme';
    import VanillaTilt from 'vanilla-tilt';
    const { $gsap, $ScrollTrigger } = useNuxtApp()


    onMounted(() => { 
        $gsap.registerPlugin($ScrollTrigger)
        $gsap.to(".colPhoto", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#aboutus",
                start: "top",
                endTrigger: "#aboutusContent",
                end: "bottom",
                markers: false,
            },
            y: 150,
        })
        $gsap.to(".colPhotoC", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#aboutus",
                start: "top",
                endTrigger: "#aboutusContent",
                end: "bottom",
                markers: false,
            },
            y: -100,
        })
        $gsap.to(".colTitle1", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#aboutus",
                start: "top",
                endTrigger: "#aboutusContent",
                end: "bottom",
                markers: false,
            },
            x: 150,
        })
        $gsap.to(".colTitle2", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#aboutus",
                start: "top",
                endTrigger: "#aboutusContent",
                end: "bottom",
                markers: false,
            },
            x: -150,
        });
        $gsap.to(".colTexte1", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#aboutus",
                start: "top",
                endTrigger: "#aboutusContent",
                end: "bottom",
                markers: false,
            },
            y: 150,
        });
        $gsap.to(".colTexte2", {
            scrollTrigger: {
                scrub: 1,
                trigger: "#aboutus",
                start: "top",
                endTrigger: "#aboutusContent",
                end: "bottom",
                markers: false,
            },
            y: 200,
        });
    })
</script>

<template>
    <section id="aboutus" class="h-full w-full bg-white overflow-hidden">
        <div id="aboutusContent" class="p-20">
            <div class="grid grid-cols-12 items-center">
                <p class="col-span-1 font-nunito text-black text-sm">QUI SUIS-JE ?</p>
                <div class="col-span-11 h-1 bg-black pixelateMin" />
            </div>
            <div class="colPhoto grid grid-cols-12 p-40 z-[5] mt-40">
                <div class="colPhotoC absolute w-full h-full col-span-12">
                    <NuxtImg src="test-3.png" class="mx-auto -mt-20 w-full noise" height="2000" data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);"/>
                </div>
                <NuxtImg src="naidi-photo-1.jpg" class="mx-auto hover:noise col-span-6 col-start-4" height="516"  data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);"/>
            </div>
            <div class="grid grid-cols-12 gap-y-6 p-20 pb-40">
                <h3 class="colTitle1 text-stone-300 font-antonsc text-[6vw] text-left text-black flex flex-col col-span-12 uppercase">Artiste tatoueuse depuis 6ans</h3>
                <h3 class="colTitle2 font-antonsc text-[6vw] text-right text-black flex flex-col col-span-12 uppercase">Mon inspiration est votre !</h3>
                <div class="colTexte flex flex-col-2 col-span-10 col-start-5 my-20 mb-40 font-nunito text-sm uppercase gap-x-6 text-justify">
                    <p class="colTexte1">Bienvenue dans mon univers artistique où <b>chaque tatouage raconte une histoire unique</b>. Passionnée par l'<i>art du tatouage depuis des années</i>, je mets mon expertise et ma créativité au service de <b>ceux qui souhaitent marquer leur corps de manière indélébile.</b></p>
                    <p class="colTexte2">Votre sourire, votre manière de parler et votre ressenti m'inspirent dès les premières minutes de notre échange. Ensemble, nous donnerons vie à une œuvre d'art personnelle et intemporelle. Mon objectif est de transformer votre idée en une création qui résonnera avec vous pour toujours.</p>
                </div>
            </div>
        </div>
        <div class="absolute w-full z-[5]">
            <NuxtImg src="test-2.png" class="mr-auto noise -mt-[100vh] ml-40" height="800" data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);"/>
        </div>
    </section>
</template>

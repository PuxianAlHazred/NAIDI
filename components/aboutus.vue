<script setup lang="ts">
    import type { _backgroundColor } from '#tailwind-config/theme';
    import VanillaTilt from 'vanilla-tilt';
    const { $gsap, $ScrollTrigger } = useNuxtApp()
    const { isMobile, isTablet, isDesktop, isSafari, isChrome } = useDevice()


    onMounted(() => { 
        $gsap.registerPlugin($ScrollTrigger)
        if(isDesktop) { 
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
                y: 100,
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
                y: 150,
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
                y: 250,
            }); 
        }
        if(isTablet) {
        }
        if(isMobile) {
        }

    })
</script>

<template>
    <section id="aboutus" class="h-full w-full bg-white dark:bg-black overflow-hidden">
        <div id="aboutusContent" class="lg:p-20 p-10">
            <div class="grid grid-cols-12 items-center lg:pt-0 pt-10">
                <p class="lg:col-span-1 col-span-5 font-nunito text-black text-sm dark:text-white ">QUI SUIS-JE ?</p>
                <div class="lg:col-span-11 col-span-7 h-1 bg-black pixelateMin dark:bg-white " />
            </div>
            <div class="colPhoto grid grid-cols-12 lg:p-40 p-0 z-[5] lg:mt-40 mt-10">
                <div class="colPhotoC lg:absolute w-full h-full col-span-12  dark:invert ">
                    <img 
                        src="/test-3.png" 
                        class="mx-auto -mt-20 w-full noise  lg:block hidden" 
                        data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" 
                        style="transform-style: preserve-3d; transform: perspective(1000px);"
                    />
                </div>
                <img 
                    src="/naidi-photo-1.jpg" 
                    class="mx-auto hover:noise lg:col-span-6 lg:col-start-4 col-span-12" 
                    data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" 
                    style="transform-style: preserve-3d; transform: perspective(1000px);"
                />
            </div>
            <div class="grid grid-cols-12 gap-y-6 lg:pb-40 lg:py-0 py-10 z-[1]">
                <h3 class="colTitle1 text-stone-300 font-antonsc lg:text-[6vw] text-5xl text-left dark:text-teal-700 flex flex-col col-span-12 uppercase lg:-mb-10 mb-6">Artiste tatoueuse depuis 6ans</h3>
                <h3 class="colTitle2 font-antonsc lg:text-[6vw] text-5xl text-right text-black flex flex-col col-span-12 uppercase -mt-10 dark:text-white ">Mon inspiration est votre !</h3>
                <div class="colTexte flex lg:flex-col-2 flex-col lg:col-span-10 lg:col-start-5 col-span-12 lg:my-20 lg:mb-40  font-nunito text-sm uppercase gap-x-6 text-justify text-black dark:text-white lg:-mt-0 mt-2">
                    <p class="colTexte1 w-full lg:text-left text-justify">Bienvenue dans mon univers artistique où <b>chaque tatouage raconte une histoire unique</b>. Passionnée par l'<i>art du tatouage depuis des années</i>, je mets mon expertise et ma créativité au service de <b>ceux qui souhaitent marquer leur corps de manière indélébile.</b></p>
                    <p class="colTexte2 w-full lg:text-right text-justify mt-6 lg:mt-0">Votre sourire, votre manière de parler et votre ressenti m'inspirent dès les premières minutes de notre échange. Ensemble, nous donnerons vie à une œuvre d'art personnelle et intemporelle. Mon objectif est de transformer votre idée en une création qui résonnera avec vous pour toujours.</p>
                </div>
            </div>
        </div>
        <div class=" lg:block hidden absolute w-full z-[0] dark:invert ">
            <NuxtImg src="test-2.png" class="mr-auto noise -mt-[100vh] ml-20" height="800" data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);"/>
        </div>
    </section>
</template>

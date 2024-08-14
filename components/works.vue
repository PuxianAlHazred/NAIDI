<script setup lang="ts">
    const { $gsap, $ScrollTrigger } = useNuxtApp()
    import VanillaTilt from 'vanilla-tilt';
    const { isMobile, isTablet, isDesktop, isSafari, isChrome } = useDevice()

    const optionsGrid1 = { scrub: 1, trigger: ".worksGrid1", start: "top-=600", endTrigger: ".worksGrid1", end: "bottom", markers: false }
    const optionsGrid2 = { scrub: 1, trigger: ".worksGrid2", start: "top-=600", endTrigger: ".worksGrid2", end: "bottom", markers: false }
    const optionsGrid3 = { scrub: 1, trigger: ".worksGrid3", start: "top-=600", endTrigger: ".worksGrid3", end: "bottom", markers: false }
    const optionsGrid4 = { scrub: 1, trigger: ".worksGrid4", start: "top-=600", endTrigger: ".worksGrid4", end: "bottom", markers: false }
    const optionsGrid5 = { scrub: 1, trigger: ".worksGrid5", start: "top-=600", endTrigger: ".worksGrid5", end: "bottom", markers: false }

    onMounted(() => { 
        $gsap.registerPlugin($ScrollTrigger)
        if(isDesktop) { 

            $gsap.to(".gridText1", { scrollTrigger: optionsGrid2, y: 100 })
            $gsap.to(".gridText2", { scrollTrigger: optionsGrid3, y: -100 })
            $gsap.to(".gridText3", { scrollTrigger: optionsGrid5, y: 100 })

            $gsap.to(".worksGrid1 > div:nth-child(1)", { scrollTrigger: optionsGrid1, y: 0 })
            $gsap.to(".worksGrid1 > div:nth-child(2)", { scrollTrigger: optionsGrid1, y: -100 })
            $gsap.to(".worksGrid1 > div:nth-child(3)", { scrollTrigger: optionsGrid1, y: 300 })

            $gsap.to(".worksGrid2 > div:nth-child(1)", { scrollTrigger: optionsGrid2, y: 300 })
            $gsap.to(".worksGrid2 > div:nth-child(2)", { scrollTrigger: optionsGrid2, y: -200 })
            $gsap.to(".worksGrid2 > div:nth-child(3)", { scrollTrigger: optionsGrid2, y: 200 })
            $gsap.to(".worksGrid2> div:nth-child(4)", { scrollTrigger: optionsGrid2, x: 0 })

            $gsap.to(".worksGrid3 > div:nth-child(1)", { scrollTrigger: optionsGrid3, y: 300 })
            $gsap.to(".worksGrid3 > div:nth-child(2)", { scrollTrigger: optionsGrid3, y: -300 })
            $gsap.to(".worksGrid3> div:nth-child(3)", { scrollTrigger: optionsGrid3, y: 100 })

            $gsap.to(".worksGrid4 > div:nth-child(1)", { scrollTrigger: optionsGrid4, y: 0 })
            $gsap.to(".worksGrid4 > div:nth-child(2)", { scrollTrigger: optionsGrid4, y: 300 })
            $gsap.to(".worksGrid4 > div:nth-child(3)", { scrollTrigger: optionsGrid4, y: 100 })

            $gsap.to(".worksGrid5 > div:nth-child(1)", { scrollTrigger: optionsGrid5, y: 300 })
            $gsap.to(".worksGrid5 > div:nth-child(2)", { scrollTrigger: optionsGrid5, y: 0 })
            $gsap.to(".worksGrid5 > div:nth-child(3)", { scrollTrigger: optionsGrid5, y: -300 })
        }
        if(isTablet) {
        }
        if(isMobile) {
        }
    })
</script>

<template>
    <section id="works" class="h-full w-full bg-transparent z-[10]">
        <div id="worksContent" class="lg:p-20 p-10">
            <div class="grid grid-cols-12 items-center lg:my-0 my-10">
                <div class="lg:col-span-11 col-span-7 h-1 bg-black dark:bg-white pixelateMin" />
                <p class="lg:col-span-1 col-span-5 font-nunito text-black dark:text-white text-right text-sm">PORTFOLIO</p>
            </div>

            <section class="worksGrid1 grid grid-cols-11 lg:mb-0 mb-20 lg:gap-10 gap-y-10">
                <div class="lg:col-span-5 col-span-11 lg:col-start-0 dark:invert">
                    <img  data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);" src="/img/453535529_18099980209428157_5800917505740808106_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
                <div class="lg:col-span-2 col-span-11  lg:mt-60 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal duration-500">
                    <img src="/img/453506883_18099876205428157_7493403250160304289_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
                <div class="lg:col-span-3 col-span-11  lg:col-start-9 lg:saturate-0 lg:mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal  duration-500 dark:invert">
                    <img src="/img/453194386_18099634264428157_1966402677767635482_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
            </section>

            <div class="gridText1 grid grid-cols-12 gap-y-6 lg:my-0 my-6">
                <h3 class="text-stone-300 dark:text-teal-700 font-antonsc text-[10vw] lg:text-[12vw] text-center text-black flex  col-span-12 uppercase justify-between">VIBRONS <span>ENSEMBLE</span></h3>
                <h3 class="lg:-mt-40 -mt-10 font-mrdafoe lg:text-8xl text-3xl lg:text-right text-center text-black flex flex-col col-span-12 text-black dark:text-white">grâce au tatouage !</h3>
            </div>

            <section class="lg:block hidden  worksGrid2 grid grid-cols-11 lg:my-0 mt-20 lg:gap-10 gap-y-10">
                <div class="lg:col-span-2 col-span-11  saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal duration-500">
                    <img src="/img/453002763_18099367093428157_1681512558541762286_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
                <div class="saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal lg:col-span-2 col-span-11   lg:mt-60 ">
                    <img src="/img/452941299_18099278131428157_2869167391769077256_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
                <div class="saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal lg:col-span-2 col-span-11   lg:col-start-6 lg:mt-80">
                    <img src="/img/452414292_18098980507428157_3786217696202268850_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
                <div class="lg:col-span-5 col-span-11 lg:col-start-8 lg:-mt-20 dark:invert">
                    <img  data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);" src="/img/452813665_18099224227428157_8201768330761891864_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
            </section>
            <section class="lg:block hidden  worksGrid3 grid grid-cols-11 lg:my-0 mb-20 lg:gap-10 gap-y-10">
                <div class="lg:col-span-2 col-span-11 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal duration-500">
                    <img src="/img/452862984_18099122266428157_2136310913645337918_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
                <div class="lg:col-span-3 col-span-11 ">
                    <img src="/img/452430499_18099028498428157_7908250307920229122_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
                <div class="lg:col-span-3 col-span-11  lg:col-start-9 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal duration-500">
                    <img src="/img/452541290_18098834728428157_7492670005107750811_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
            </section>

            <div class="gridText2 grid grid-cols-12 gap-y-6 lg:px-20 mb-20">
                <p class="font-nunito text-black dark:text-white text-justify lg:text-center text-sm flex flex-col col-span-12 uppercase">Pour moi, le processus est comme une symphonie où nos inspirations se mêlent, donnant naissance à quelque chose d'unique pour vous et pour moi.</p>
            </div>

            <section class="worksGrid4 grid grid-cols-11 lg:mt-0 mt-20 lg:gap-10 gap-y-10">
                <div class="lg:col-span-5 col-span-11 ">
                    <img  
                        data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" 
                        style="transform-style: preserve-3d; transform: perspective(1000px);" 
                        src="/img/451989447_18098629495428157_8258900128840953812_n.jpg" 
                        class="WorksImg mx-auto w-full dark:invert"  
                    />
                </div>
                <div class="lg:block hidden lg:col-span-2 col-span-11 lg:col-start-8 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal duration-500">
                    <img src="/img/451957159_18098571226428157_7164807298222802799_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
                <div class="lg:block hidden lg:col-span-2 col-span-11 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal duration-500">
                    <img src="/img/451697159_18098512759428157_73240894726432356_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
            </section>
            <section class="worksGrid5 grid grid-cols-11 lg:mt-0 mt-10 lg:mb-0 mb-20 lg:gap-10 gap-y-10">
                <div class="lg:block hidden lg:col-span-2 col-span-11 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal duration-500">
                    <img src="/img/447417977_18093890395428157_5907835226710583394_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
                <div class="lg:col-span-5 col-span-11 lg:col-start-4">
                    <img  
                        data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" 
                        style="transform-style: preserve-3d; transform: perspective(1000px);" 
                        src="/img/451749587_18098480347428157_2723494338768112179_n.jpg" 
                        class="WorksImg mx-auto w-full dark:invert"  
                    />
                </div>
                <div class="lg:block hidden lg:col-span-3 col-span-11  saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal dark:mix-blend-normal duration-500">
                    <img src="/img/441163089_18090943804428157_5925302377723978892_n.jpg" class="WorksImg mx-auto w-full"  />
                </div>
            </section>

            <a class="gridText3 grid grid-cols-12 gap-y-10 lg:my-40 lg:mb-40 mb-10 mx-auto" href="https://www.instagram.com/naidi.tattoo/" target="_blank">
                <h5 class="text-stone-300 font-antonsc lg:text-[12vw] text-4xl text-center dark:text-teal-700 flex flex-col col-span-12 uppercase tracking-widest">
                    INSTAGRAM
                </h5>
                <h6 class="hover:underline lg:-mt-40 -mt-10 font-mrdafoe lg:text-8xl text-3xl text-center text-black flex flex-col col-span-12  dark:text-white">Voir plus de créations</h6>
            </a>
        </div>
    </section>
</template>

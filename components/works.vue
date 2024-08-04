<script setup lang="ts">
    const { $gsap, $ScrollTrigger } = useNuxtApp()
    const options1 = {
        scrub: 1,
        trigger: "#works",
        start: "top",
        endTrigger: "#worksContent",
        end: "bottom",
        markers: false,
    }
    const optionsGrid1 = {
        scrub: 1,
        trigger: ".worksGrid1",
        start: "top-=600",
        endTrigger: ".worksGrid1",
        end: "bottom",
        markers: false
    }
    const optionsGrid2 = {
        scrub: 1,
        trigger: ".worksGrid2",
        start: "top-=600",
        endTrigger: ".worksGrid2",
        end: "bottom",
        markers: false
    }
    const optionsGrid3 = {
        scrub: 1,
        trigger: ".worksGrid3",
        start: "top-=600",
        endTrigger: ".worksGrid3",
        end: "bottom",
        markers: false
    }
    const optionsGrid4 = {
        scrub: 1,
        trigger: ".worksGrid4",
        start: "top-=600",
        endTrigger: ".worksGrid4",
        end: "bottom",
        markers: false
    }
    const optionsGrid5 = {
        scrub: 1,
        trigger: ".worksGrid5",
        start: "top-=600",
        endTrigger: ".worksGrid5",
        end: "bottom",
        markers: false
    }
    onMounted(() => { 
        $gsap.registerPlugin($ScrollTrigger)
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
    })
</script>

<template>
    <section id="works" class="h-full w-full bg-transparent z-[10]">
        <div id="worksContent" class="p-20">
            <div class="grid grid-cols-12 items-center">
                <div class="col-span-11 h-1 bg-black pixelateMin" />
                <p class="col-span-1 font-nunito text-black text-right text-sm">PORTFOLIO</p>
            </div>

            <section class="worksGrid1 grid grid-cols-11 my-20 gap-10 ">
                <div class="col-span-5 col-start-0">
                    <NuxtImg  data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);" src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/453535529_18099980209428157_5800917505740808106_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zgWEkYuFYp4Q7kNvgFwWYDi&_nc_ht=scontent-cdg4-1.xx&oh=00_AYAapOqM29NExdlVFXNYUeQvlI8HuHKvm9aqi2DmTQWohw&oe=66B45995" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="col-span-2  mt-60 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal duration-500">
                    <NuxtImg src="https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/453506883_18099876205428157_7493403250160304289_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lp7VSgs5tH0Q7kNvgFmAOyI&_nc_ht=scontent-cdg4-3.xx&oh=00_AYCuRzwVEye-JtVlfSsQyRYAgEuzB7vxrAtzpFUz8mH-TA&oe=66B46438" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="col-span-3 col-start-9 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal  duration-500">
                    <NuxtImg src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/453194386_18099634264428157_1966402677767635482_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z2bBXEmcVqsQ7kNvgE2eb8W&_nc_ht=scontent-cdg4-1.xx&oh=00_AYBj_HBeYMcegCICwv_a7d7yV1cBhUFUjFvoo-OHvQY5PA&oe=66B46F46" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
            </section>

            <div class="grid grid-cols-12 gap-y-6">
                <h3 class="text-stone-300 font-antonsc text-[12vw] text-center text-black flex flex-col col-span-12 uppercase">VIBRONS ENSEMBLE</h3>
                <h3 class="-mt-40 font-mrdafoe text-8xl text-right text-black flex flex-col col-span-12 ">grâce au tatouage !</h3>
            </div>

            <section class="worksGrid2 grid grid-cols-11 my-20 gap-10">
                <div class="col-span-2 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal duration-500">
                    <NuxtImg src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/453002763_18099367093428157_1681512558541762286_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PGTHsGf4l9YQ7kNvgFTKxeF&_nc_ht=scontent-cdg4-1.xx&oh=00_AYDSrDKU1EO6KQ5ksF6-P3Q7bV9BZPuN4FJ-pk-FZ-1fCw&oe=66B47859" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="saturate-0 mix-blend-darken  col-span-2 mt-60">
                    <NuxtImg src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/452941299_18099278131428157_2869167391769077256_n.jpg?stp=dst-jpg_s640x640&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7LwpgtdudloQ7kNvgH_fTmj&_nc_ht=scontent-cdg4-2.xx&oh=00_AYBo2_OI-D_iS-_DKjXziNlWuWyFSox0NnSQtMUaxsRVbw&oe=66B47509" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="saturate-0 mix-blend-darken  col-span-2 col-start-6 mt-80">
                    <NuxtImg src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/452414292_18098980507428157_3786217696202268850_n.jpg?stp=dst-jpg_s640x640&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6oP2UzqexjUQ7kNvgHKTOMb&_nc_ht=scontent-cdg4-1.xx&oh=00_AYBh1lvVPpLZTTbUbJ1D14oMQeBBn_XgYPhCFpIQW8u60A&oe=66B45727" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="col-span-5 col-start-8 -mt-20">
                    <NuxtImg  data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);" src="https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/452813665_18099224227428157_8201768330761891864_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MBvKClqPmngQ7kNvgHOGa8a&_nc_ht=scontent-cdg4-3.xx&oh=00_AYCCYDm9A8oQXUHuFXsaeQGYf6xyEAUDcuOTlTA_2d6vGA&oe=66B46806" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
            </section>
            <section class="worksGrid3 grid grid-cols-11 my-20 gap-10">
                <div class="col-span-2 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal duration-500">
                    <NuxtImg src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/452862984_18099122266428157_2136310913645337918_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dMUMKk2LOIcQ7kNvgH7ouXN&_nc_ht=scontent-cdg4-1.xx&oh=00_AYA5YlJHJpAtemQW1t5p--AkJan5QKoMTg1OAtsRjbt-hQ&oe=66B468E8" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="col-span-3 ">
                    <NuxtImg src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/452430499_18099028498428157_7908250307920229122_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jmMZOWcorA8Q7kNvgGjz2gM&_nc_ht=scontent-cdg4-1.xx&oh=00_AYCnmMTWluookU3cpKEv59DS2QBh8JxUewyNZO3hhbSNjQ&oe=66B45825" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="col-span-3  col-start-9 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal duration-500">
                    <NuxtImg src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/452541290_18098834728428157_7492670005107750811_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3XY19bL6QRQQ7kNvgFHokQy&_nc_ht=scontent-cdg4-2.xx&oh=00_AYC9CwTPS7DHzUxqi9GX_mtQ4nqtjaGyCFDkeS2vdQuT9w&oe=66B463A2" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
            </section>

            <div class="grid grid-cols-12 gap-y-6 px-20 mb-20">
                <p class="font-nunito text-black text-center text-sm flex flex-col col-span-12 uppercase">Pour moi, le processus est comme une symphonie où<br> nos inspirations se mêlent, donnant naissance à<br> quelque chose d'unique pour vous et pour moi.</p>
            </div>

            <section class="worksGrid4 grid grid-cols-11 my-20 gap-10">
                <div class="col-span-5 ">
                    <NuxtImg  data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);" src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/451989447_18098629495428157_8258900128840953812_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7wc7Hc2Q_rgQ7kNvgHagtHi&_nc_ht=scontent-cdg4-2.xx&oh=00_AYD_WSQ_xc4GcDB9GIulwOYBQoSTZGiIZp1V_CCSuELUlQ&oe=66B4677B" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="col-span-2 col-start-8 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal duration-500">
                    <NuxtImg src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/451957159_18098571226428157_7164807298222802799_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BldWu6bt1dcQ7kNvgEZ24Nv&_nc_ht=scontent-cdg4-1.xx&oh=00_AYBahIlnvo_Cgy__eQVsSzm1phpO2G8ccSjyHBo0yuZxfw&oe=66B4541B" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="col-span-2 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal duration-500">
                    <NuxtImg src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/451697159_18098512759428157_73240894726432356_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eSn1uDKF3aoQ7kNvgHp0G-L&_nc_ht=scontent-cdg4-1.xx&oh=00_AYBU-i8G71QGeC_MB1EVugdB7P0f6mqyfTtO4-3tvR-qag&oe=66B45529" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
            </section>
            <section class="worksGrid5 grid grid-cols-11 my-20 gap-10">
                <div class="col-span-2 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal duration-500">
                    <NuxtImg src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/447417977_18093890395428157_5907835226710583394_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4nMATzq2do0Q7kNvgGRAjJL&_nc_ht=scontent-cdg4-2.xx&oh=00_AYAfyP27vpMZXY8rZTj4YhCUGqDmQkO44Dke1Iy99KZs9Q&oe=66B4608C" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="col-span-5 col-start-4">
                    <NuxtImg  data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);" src="https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/451749587_18098480347428157_2723494338768112179_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IWZ2O6TPyisQ7kNvgEfnaxK&_nc_ht=scontent-cdg4-3.xx&oh=00_AYB5TkLarGoXbe4vKHyKnGLLazUhEAz1OVHduK39OlKRHA&oe=66B4580F" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
                <div class="col-span-3 saturate-0 mix-blend-darken hover:saturate-100 hover:mix-blend-normal duration-500">
                    <NuxtImg src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/441163089_18090943804428157_5925302377723978892_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ViVMD996NawQ7kNvgF0DM8o&_nc_ht=scontent-cdg4-1.xx&oh=00_AYAEc1JTnAuJL11vxpwCK6PfAHVypRpndKnxMc9UZVIu9g&oe=66B4542E" class="WorksImg mx-auto w-full" loading="lazy" />
                </div>
            </section>

            <div class="grid grid-cols-12 gap-y-6 px-20">
                <h3 class="text-stone-200 font-antonsc text-[12vw] text-center text-white flex flex-col col-span-12 uppercase  tracking-widest">INSTAGRAM</h3>
                <h3 class="hover:underline -mt-40 font-mrdafoe text-8xl text-center text-black flex flex-col col-span-12 ">Voir plus de créations</h3>
            </div>
        </div>
    </section>
</template>

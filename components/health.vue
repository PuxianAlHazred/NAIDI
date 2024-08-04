<script setup lang="ts">
    const swiper = useSwiper()
</script>

<template>
    <section id="health" class="h-full w-full bg-white ">
        <div id="healthContent" class="py-20">
            <div class="grid grid-cols-12 items-center px-20">
                <p class="col-span-1 font-nunito text-teal-700 text-sm">LES SOINS</p>
                <div class="col-span-11 h-1 bg-teal-700 pixelateMin" />
            </div>
            <div class="grid grid-cols-12 gap-y-6 overflow-hidden py-10">
                <h3 class="px-20 text-teal-700 font-antonsc text-[9vw] text-center text-black flex  col-span-12 uppercase justify-between tracking-widest">Prenez <span class="underline text-black">soin</span> de vous</h3>
                <Swiper
                class="swiper-cards w-full h-[500px]"
                :width="300"
                :modules="[SwiperAutoplay]"
                :slides-per-view="1"
                :loop="true"
                :effect="'cards'"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false
                }"
                >
                    <SwiperSlide class="border-4 border-stone-300 mx-10 bg-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-4xl uppercase">Préparer votre peau !</h4>
                            <p class="text-smtext-justify uppercase font-nunito">Veuillez hydrater votre peau aussi souvent que possible (idéalement pendant les 3 jours précédant la séance). Utilisez de l'huile ou du beurre de coco, cela rendra votre peau plus douce et souple, ce qui facilitera le tatouage et garantira un résultat parfait !</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="border-4 border-stone-300 mx-10 bg-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-4xl uppercase">Ne pas épiler la zone du tatouage</h4>
                            <p class="text-smtext-justify uppercase font-nunito">Mais vous pouvez raser la zone sur votre peau ~ 1 jour avant la séance.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="border-4 border-stone-100 mx-10 bg-stone-100">
                        <div class="flex flex-col justify-center h-full p-6 saturate-0 mix-blend-darken">
                            <NuxtImg data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);" src="https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/453506883_18099876205428157_7493403250160304289_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lp7VSgs5tH0Q7kNvgFmAOyI&_nc_ht=scontent-cdg4-3.xx&oh=00_AYCuRzwVEye-JtVlfSsQyRYAgEuzB7vxrAtzpFUz8mH-TA&oe=66B46438" class="mx-auto w-full" loading="lazy" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="border-4 border-stone-300 mx-10 bg-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-4xl uppercase">Mangez très bien avant la séance</h4>
                            <p class="text-smtext-justify uppercase font-nunito">Au moins 1 heure avant. Et s'il vous plaît, apportez également des collations, des chocolats et de l'eau, c'est très important !</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="border-4 border-stone-300 mx-10 bg-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-4xl uppercase">Portez des vêtements adaptés</h4>
                            <p class="text-smtext-justify uppercase font-nunito">Surtout si la zone de votre tatouage se situe sous votre poitrine, sur vos côtes, etc. Vous devez être préparé(e) à enlever vos vêtements et à mettre des stickers spéciaux pour vos tétons. Cela garantira votre confort ainsi que le mien.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="border-4 border-stone-300 mx-10 bg-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-4xl uppercase">Ne portez pas de sous-vêtements ni de vêtements serrés</h4>
                            <p class="text-smtext-justify uppercase font-nunito">Pour éviter les traces à l’endroit où nous allons réaliser le tatouage. Il sera plus confortable pour nous deux si vous venez avec des sous-vêtements et des vêtements amples et doux.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="border-4 border-stone-300 mx-10 bg-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-4xl uppercase">Ne consommez pas d’alcool au moins 1 jour avant la séance ( et après )</h4>
                            <p class="text-smtext-justify uppercase font-nunito">Il est très important pour moi que votre corps ne soit pas intoxiqué et que vous vous sentiez frais et en bonne forme.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="border-4 border-stone-300 mx-10 bg-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-4xl uppercase">Essayez de ne pas passer trop de temps au soleil</h4>
                            <p class="text-smtext-justify uppercase font-nunito">Avant notre séance, veuillez éviter les coups de soleil, car une peau irritée peut compliquer le travail. Il est en effet difficile de tatouer sur une peau irritée et sèche.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="border-4 border-stone-300 mx-10 bg-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-4xl uppercase">Ne prenez aucun analgésique !</h4>
                            <p class="text-smtext-justify uppercase font-nunito">ne vous inquiétez pas si c'est votre premier tatouage, ce n'est pas aussi douloureux que vous pourriez le penser. La peur ne nous aidera pas à réaliser le tatouage de la meilleure qualité et le plus agréable possible.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>


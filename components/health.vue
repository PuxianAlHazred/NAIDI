<template>
    <section id="health" class="h-full w-full bg-white dark:bg-black">
        <div id="healthContent" class="lg:p-20 p-0">
            <div class="grid grid-cols-12 items-center lg:px-20 lg:pt-0 pt-20 lg:px-20 px-10">
                <p class="lg:col-span-1 col-span-5 font-nunito text-teal-700 dark:text-white text-sm">LES SOINS</p>
                <div class="lg:col-span-11 col-span-7  h-1 bg-teal-700 dark:bg-white pixelateMin" />
            </div>
            <div class="grid grid-cols-12 gap-y-6 overflow-hidden py-10  lg:px-20 px-10">
                <h3 class="lg:animate-none animate-pulse lg:px-20 text-teal-700 font-antonsc lg:text-[9vw] text-2xl text-center flex  col-span-12 uppercase justify-between tracking-widest">Prenez <span class="underline text-black dark:text-white">soin</span> de vous</h3>
                <Swiper
                    class="swiper-cards w-full h-[500px] lg:mt-0 mt-6 lg:mb-0 mb-10"
                    width="250"
                    :modules="[SwiperAutoplay]"
                    :slides-per-view="1"
                    :scrollbar="{ draggable: true }"
                    :space-between="20"
                    :loop="false"
                    :effect="'cards'"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: true
                    }"
                >
                    <SwiperSlide class="group hover:border-teal-700 border-4 lg:border-stone-300 dark:border-black border-stone-50 lg:mx-10 lg:bg-white bg-stone-50 lg:ml-20 dark:bg-black dark:text-white" >
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-3xl uppercase group-hover:text-teal-700" >Préparer votre peau !</h4>
                            <p class="text-sm text-justify uppercase font-nunito">Veuillez hydrater votre peau aussi souvent que possible (idéalement pendant les 3 jours précédant la séance). Utilisez de l'huile ou du beurre de coco, cela rendra votre peau plus douce et souple, ce qui facilitera le tatouage et garantira un résultat parfait !</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="group hover:border-teal-700 border-4 lg:border-stone-300 dark:border-black border-stone-50  lg:mx-10 lg:bg-white bg-stone-50  dark:bg-black dark:text-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-3xl uppercase group-hover:text-teal-700">Ne pas épiler la zone du tatouage</h4>
                            <p class="text-sm text-justify uppercase font-nunito">Mais vous pouvez raser la zone sur votre peau ~ 1 jour avant la séance.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="hover:border-teal-700 border-4 border-stone-100 lg:mx-10 bg-stone-50  dark:bg-black dark:border-black dark:text-white">
                        <div class="flex flex-col justify-center h-full p-6 saturate-0 mix-blend-darken dark:mix-blend-lighten">
                            <img data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" data-tilt-reset="false" style="transform-style: preserve-3d; transform: perspective(1000px);" src="/img/452941299_18099278131428157_2869167391769077256_n.jpg" class="mx-auto w-full" loading="lazy" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="group hover:border-teal-700 border-4 lg:border-stone-300 dark:border-black border-stone-50  lg:mx-10 lg:bg-white bg-stone-50  dark:bg-black dark:text-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-3xl uppercase group-hover:text-teal-700">Mangez très bien avant la séance</h4>
                            <p class="text-sm text-justify uppercase font-nunito">Au moins 1 heure avant. Et s'il vous plaît, apportez également des collations, des chocolats et de l'eau, c'est très important !</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="group hover:border-teal-700 border-4 lg:border-stone-300 dark:border-black border-stone-50  lg:mx-10 lg:bg-white bg-stone-50  dark:bg-black dark:text-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-3xl uppercase group-hover:text-teal-700">Portez des vêtements adaptés</h4>
                            <p class="text-sm text-justify uppercase font-nunito">Surtout si la zone de votre tatouage se situe sous votre poitrine, sur vos côtes, etc. Vous devez être préparé(e) à enlever vos vêtements et à mettre des stickers spéciaux pour vos tétons. Cela garantira votre confort ainsi que le mien.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="group hover:border-teal-700 border-4 lg:border-stone-300 dark:border-black border-stone-50  lg:mx-10 lg:bg-white bg-stone-50  dark:bg-black dark:text-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-3xl uppercase group-hover:text-teal-700">Ne portez pas de sous-vêtements ni de vêtements serrés</h4>
                            <p class="text-sm text-justify uppercase font-nunito">Pour éviter les traces à l’endroit où nous allons réaliser le tatouage. Il sera plus confortable pour nous deux si vous venez avec des sous-vêtements et des vêtements amples et doux.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="group hover:border-teal-700 border-4 lg:border-stone-300 dark:border-black border-stone-50  lg:mx-10 lg:bg-white bg-stone-50  dark:bg-black dark:text-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-3xl uppercase group-hover:text-teal-700">Ne consommez pas d’alcool au moins 1 jour avant la séance ( et après )</h4>
                            <p class="text-sm text-justify uppercase font-nunito">Il est très important pour moi que votre corps ne soit pas intoxiqué et que vous vous sentiez frais et en bonne forme.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="group hover:border-teal-700 border-4 lg:border-stone-300 dark:border-black border-stone-50  lg:mx-10 lg:bg-white bg-stone-50  dark:bg-black dark:text-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-3xl uppercase group-hover:text-teal-700">Essayez de ne pas passer trop de temps au soleil</h4>
                            <p class="text-sm text-justify uppercase font-nunito">Avant notre séance, veuillez éviter les coups de soleil, car une peau irritée peut compliquer le travail. Il est en effet difficile de tatouer sur une peau irritée et sèche.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="group hover:border-teal-700 border-4 lg:border-stone-300 dark:border-black border-stone-50  lg:mx-10 lg:bg-white bg-stone-50  dark:bg-black dark:text-white">
                        <div class="flex flex-col justify-between h-full p-6">
                            <h4 class="font-antonsc text-3xl uppercase group-hover:text-teal-700">Ne prenez aucun analgésique !</h4>
                            <p class="text-sm text-justify uppercase font-nunito">ne vous inquiétez pas si c'est votre premier tatouage, ce n'est pas aussi douloureux que vous pourriez le penser. La peur ne nous aidera pas à réaliser le tatouage de la meilleure qualité et le plus agréable possible.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>


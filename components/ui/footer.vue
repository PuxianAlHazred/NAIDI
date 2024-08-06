<template>
    <footer id="footer" class="bg-white dark:bg-black h-screen flex flex-col justify-end z-[10]">
        <div class="flex flex-col pb-10 pb-0 w-full font-nunito z-[10]">
            <p class="text-center uppercase dark:text-white ">Passionnée par l'art du <b>tatouage</b> depuis des années,<br> je mets mon expertise et ma créativité<br> au service de vos envies !</p>
            <a class="mx-auto mt-6 border-4 border-stone-300  text-4xl text-black dark:text-white py-3 px-6 animate-pulse font-mrdafoe">Prendre contact</a>
        </div>
        <h6 class="font-antonsc text-[16vw] text-center text-black dark:text-white w-full flex justify-between tracking-widest px-20">NAÏDI <span class="text-teal-700">TATTOO</span></h6>
        <div class="grid grid-cols-12 items-center px-20 border-t-0 border-stone-300 text-sm z-[10] text-black dark:text-white">
            <a class="col-span-2  hover:underline font-nunito  font-bold uppercase" href="#">Copyright 2024</a>

            <section class="h-20 col-span-7 flex justify-between font-nunito px-20 items-center uppercase">
                <h6 class="font-mrdafoe text-[3vw] text-left text-stone-200 lowercase">Naïdi<span class="text-stone-300">tattoo</span></h6>

                <a class="underline hover:font-bold"href="#">instagram</a>
                <a class="hover:font-bold"href="#">with love by <u>piks-L</u></a>
            </section>
            <span class="col-span-2 font-nunito text-right flex flex-col leading-[16px] uppercase"><b>TATTOO ARTISTE</b> basée sur Toulouse</span>
            <div class="col-span-1 flex justify-end">
                <svg
                    v-if="$colorMode.value === 'light'"
                    @click="$colorMode.preference = 'dark'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-6 h-6 text-black"
                ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                <svg
                    v-if="$colorMode.value === 'dark'"
                    @click="$colorMode.preference = 'light'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-6 h-6 text-white"
                >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            </div>
        </div>
    </footer>
</template>

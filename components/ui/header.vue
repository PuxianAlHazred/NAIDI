<script setup lang="ts">
const route = useRoute()
const { $gsap, $scrollTo, $ScrollTrigger } = useNuxtApp()

const test = ref('')
function scrollTo(e: any) {
    $gsap.to(window, { duration: 2, scrollTo: e })
    test.value = e
}
onMounted(() => { 
    $gsap.registerPlugin($scrollTo)
    $gsap.registerPlugin($ScrollTrigger)
    $gsap.to("#navigation", {
        scrollTrigger: {
            scrub: true,
            trigger: "#aboutus",
            start: "top",
            endTrigger: "#aboutus",
            end: "bottom",
            markers: false,
        },
        opacity: 1,
    })

})
</script>
<template>
    <nav id="navigation" 
        class="h-20 w-full border-b-4 border-white flex justify-between font-nunito px-20 items-center text-sm z-[10] opacity-0 fixed top-0 bg-background/100 backdrop-blur "
    >
        <h6 class="font-mrdafoe text-[3vw] text-left text-black">
            naïdi
        </h6>
        <a :class="{ 'font-bold underline': test === '#intro' }" 
            class="hover:underline hover:font-bold uppercase" 
            @click="scrollTo('#intro')"
        >
            Accueil
        </a>
        <a :class="{ 'font-bold underline': test === '#aboutus' }" 
            class="hover:underline hover:font-bold uppercase" 
            @click="scrollTo('#aboutus')"
        >
            Qui suis-je ?
        </a>
        <a :class="{ 'font-bold underline': test === '#works' }" 
            class="hover:underline hover:font-bold uppercase" 
            @click="scrollTo('#works')"
        >
            Portfolio
        </a>
        <a :class="{ 'font-bold underline': test === '#health' }" 
            class="hover:underline hover:font-bold uppercase" 
            @click="scrollTo('#health')"
        >
            Les Soins
        </a>
        <a :class="{ 'font-bold underline': test === '#contact' }" 
            class="hover:underline hover:font-bold uppercase" 
            @click="scrollTo('#contact')"
        >
            Atelier
        </a>
        <a class="font-antonsc text-teal-700 text-2xl" 
            href="#"
        >
            CONTACT
        </a>
    </nav>
</template>
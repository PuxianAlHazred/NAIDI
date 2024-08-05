<script setup lang="ts">
    import { _backgroundColor, type _borderWidth } from '#tailwind-config/theme';
    const loadings = ref(true)
    const { $gsap } = useNuxtApp()
    function animetest() {
        $gsap.to('.gsap-loading', { 
            height: 0, 
            padding: 0,
            duration: 1,
            delay: 3   
        })
        $gsap.to('#loading', { 
            height: 0, 
            duration: 2,
            delay: 1,
            y: -400
        })
        $gsap.to('.gsap-blur', { 
            'webkitFilter': 'blur(300px)',
            duration: 3,     
        })
        $gsap.to('.gsap-border', { 
            duration: 1,  
            borderWidth: 0,  
            delay: 1  
        })
        $gsap.to('.gsap-opacity', { 
            duration: 1,  
            opacity: 1,  
            marginTop: "100%",
            delay: 2  
        })
        $gsap.to('.gsap-img', { 
            duration: 1,  
            opacity: 0,  
            delay: 1  
        })
        setTimeout(() => {
            loadings.value = false
        }, 3000);  
    }
    onMounted(() => {
        $gsap.to('.gsap-loading', { 
            borderWidth: 0, 
            duration: 3,
        })
        $gsap.to('.gsap-blur', { 
            'webkitFilter': 'blur(0px)',
            duration: 3,     
        })
        $gsap.to('.gsap-border', { 
            duration: 1,  
            borderWidth: 4,  
            delay: 3  
        })
        $gsap.to('.gsap-opacity', { 
            duration: 1,  
            opacity: 1,  
            marginTop: "0%",
            delay: 3  
        })
        $gsap.to('.gsap-img', { 
            duration: 1,  
            opacity: 1,  
            delay: 2  
        })


    })
</script>

<template>
    <section id="loading" class="overflow-hidden  opacity-1 z-[50] fixed top-0  w-screen h-screen select-none">
        <div class="absolute w-full h-screen z-[0]">
            <NuxtImg src="intro.png" class="gsap-img opacity-0 mx-auto noise -mt-[0vh] -ml-[15vw]" height="1800" width="1440"  />
        </div>
        <div class="gsap-loading w-full h-screen bg-stone-100 border-white border-[1000px] p-[100px] grid grid-cols-12 items-center z-[10]" >
            <span class="opacity-0 gsap-opacity col-span-3 font-nunito text-left flex flex-col mt-[100%] overflow-y-hidden"><b>LOADING</b> 100%</span>
            <div class="gsap-border bg-transparent col-span-6 border-0 border-stone-300 py-20  flex flex-col" data-tilt data-tilt-speed="300" data-tilt-perspective="1000" data-tilt-reverse="true" data-tilt-max="3" style="transform-style: preserve-3d; transform: perspective(1000px);">
                <h1 class="gsap-blur blur-[500px] font-antonsc text-[16vw] text-center text-black z-40]" style="transform: translateZ(200px)">NAÏDI</h1>
                <span class="opacity-0 mx-auto w-[600px] text-right text-sm font-nunito uppercase underline -mt-0 z-[50]">Scroll pour en voir plus</span>
            </div>
            <span class="opacity-0 gsap-opacity col-span-3 font-nunito text-right flex flex-col mt-[100%] uppercase"><b>TATTOO ARTISTE</b> basée sur Toulouse</span>
        </div>

    </section>
</template>

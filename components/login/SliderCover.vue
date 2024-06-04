<template>
    <div class="absolute h-full w-full  top-0 left-0 bg-black opacity-50 z-10 backdrop-blur-sm pointer-events-none">
    </div>
    <Swiper class="absolute h-full w-full  top-0 left-0" :modules="[SwiperAutoplay, SwiperEffectFade]" :effect="'fade'"
        :autoplay="{ delay: 2000 }" :speed="1000" :slides-per-view="1" :loop="true">

        <SwiperSlide>
            <img class=" w-100 min-h-screen object-cover"
                src="~/public/assets/images/login/webp/login-bg-content-1.webp" :alt="obj">

        </SwiperSlide>
        <SwiperSlide>
            <img class=" w-100 min-h-screen object-cover"
                src="~/public/assets/images/login/webp/login-bg-content-2.webp" :alt="obj">

        </SwiperSlide>
        <SwiperSlide>
            <img class=" w-100 min-h-screen object-cover"
                src="~/public/assets/images/login/webp/login-bg-content-3.webp" :alt="obj">

        </SwiperSlide>
        <SwiperSlide>
            <img class=" w-100 min-h-screen object-cover"
                src="~/public/assets/images/login/webp/login-bg-content-4.webp" :alt="obj">

        </SwiperSlide>
        <SwiperSlide>
            <img class=" w-100 min-h-screen object-cover"
                src="~/public/assets/images/login/webp/login-bg-content-5.webp" :alt="obj">

        </SwiperSlide>

    </Swiper>
</template>
<script setup>
const loginSliderList = [
    '~/public/assets/images/login/webp/login-bg-content-1.webp',
    "~/public/assets/images/login/webp/login-bg-content-2.webp",
    "~/public/assets/images/login/webp/login-bg-content-3.webp",
    "~/public/assets/images/login/webp/login-bg-content-4.webp",
    "~/public/assets/images/login/webp/login-bg-content-5.webp",
]
</script>
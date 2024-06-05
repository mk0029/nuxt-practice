<template>
    <div class="py-6 h-screen overflow-auto flex flex-col justify-between items-center ">
        <div class="w-full"> <img class="w-[200px] h-[101px] mx-auto "
                src="~/public/assets/images/dashbord/webp/sidebar-logo.webp" alt="" />
            <div class="mt-6 w-full">

                <NuxtLink v-for="(obj, i) in sidebarList" :key="i"
                    class=" font-medium flex text-black text-sm py-3 mb-4 transition-all duration-300 ease-linear hover:bg-[#FEF8F3] hover:text-orange group relative after:absolute after:h-full after:top-0 after:right-0 after:w-0 after_hover after:rounded-[8px] after:bg-orange after:transition-all after:duration-200 after:ease-linear "
                    :href="obj.title.toLowerCase()">
                    <span class="flex items-center gap-x-2 px-8">
                        <span class=" relative inline-block min-w-6 min-h-6">
                            <Icon className=" w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                                :name="obj.icon" />
                        </span>
                        {{ obj.title }}
                    </span>
                </NuxtLink>

            </div>
        </div>
        <div
            class="mt-20 py-[30px] rounded-12 border border-dashed border-gray-white px-2.5 bg-off-white inline-block max-w-[190px] mx-auto text-center">
            <span class=" w-[38px] h-[38px] flex justify-center items-center rounded-full bg-orange mx-auto">
                <CommonIconsAdd />
            </span>
            <h3 class=" inline-block font-semibold leading-[1] text-black py-1">Daten importieren</h3>
            <p class="inline-block text-[9px] font-medium text-[#ADADAE]">
                <NuxtLink class="text-[9px] font-medium underline  text-orange">Datei aussuchen</NuxtLink> oder hierher
                ziehen.
            </p>
        </div>
    </div>

</template>

<script setup lang="ts">
import Icon from "../common/Icons/Icon.vue";
const sidebarList = [
    {
        title: "Dashboard",
        icon: "iconDashboard",
    },
    {
        title: "Customers",
        icon: "iconCustomers"
    },
    {
        title: "Offers",
        icon: "iconOffer"
    },
    {
        title: "Bookings",
        icon: "iconBookings"
    },
]
</script>
<style>
.after_hover:hover::after {
    @apply w-1
}

.group svg path,
.active_sidebar svg path {
    @apply transition-all duration-300 ease-linear
}

.group:hover svg path,
.active_sidebar:hover svg path {
    @apply stroke-orange
}
</style>
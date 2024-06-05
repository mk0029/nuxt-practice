<template>
    <div class="flex justify-between">
        <NuxtLink v-for="(obj, i) in sidebarList" :key="i"
            class="min-w-[70px] min-[390px]:min-w-[78px] flex flex-col md:flex-row text-[10px]  min-[390px]:text-xs items-center  transition-all duration-300 ease-linear hover:bg-[#FEF8F3] hover:text-orange  sm:px-3 py-4 relative after:absolute after:h-0 after:top-0 after:right-0 after:w-full after_hover after:rounded-[8px] after:bg-orange after:transition-all after:duration-200 after:ease-linear group_mobile">
            <span class=" relative inline-block min-w-6 min-h-6  ">
                <Icon className=" w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
                    :name="obj.icon" />
            </span>
            {{ obj.title }}
        </NuxtLink>
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
    {
        title: "Profile",
        icon: "iconProfile"
    },
]
</script>
<style>
.group_mobile svg path {
    @apply transition-all duration-300 ease-linear
}

.group_mobile:hover svg path {
    @apply h-1
}

.group_mobile:hover svg path {
    @apply stroke-orange
}
</style>
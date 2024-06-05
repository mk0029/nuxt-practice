<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import SidebarMobile from "./SidebarMobile.vue";
</script>

<template>
  <div>
    <div class="flex flex-wrap w-full">
      <div class="hidden lg:block w-[255px] bg-white">
        <Sidebar />
      </div>
      <div class="sm:px-10 bg-white fixed bottom-0 left-0  w-screen lg:hidden">
        <SidebarMobile />
      </div>
      <div class="flex flex-col grow w-100">
        <DashboardNav />
        <DashboardCards />
        <DashboardTable />
      </div>
    </div>
  </div>
</template>

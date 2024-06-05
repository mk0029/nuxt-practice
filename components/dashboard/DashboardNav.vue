<template>
    <div
        class="w-full py-5 px-6 sm:px-8 lg:px-10 flex justify-between items-center lg:bg-white border-l border-off-white border-solid">
        <div class=" hidden lg:block">
            <h2 class=" font-bold text-black text-2xl leading-150">Hi Stéphane</h2>
            <p class=" text-light-gray font-medium text-base leading-150 mt-1">Lass uns heute den Umsatz überprüfen!</p>
        </div>
        <img class="w-[138px] h-[70px] lg:hidden" src="~/public/assets/images/dashbord/webp/sidebar-logo.webp" alt="" />
        <div class=" flex items-center gap-x-2 md:gap-x-4">
            <div class=" flex gap-x-2 md:gap-x-4 px-4 border-r border-off-white border-solid py-3">
                <CommonIconsIcon className="w-6  cursor-pointer h-6" name="iconMessageBox" />
                <CommonIconsIcon className="w-6 h-6 cursor-pointer" name="iconNotificationBell" />
            </div>
            <div class=" flex items-center gap-x-2 md:gap-x-4"> <img
                    class=" h-12 w-12 object-cover object-center rounded-full"
                    src="~/public/assets/images/dashbord/png/profile-dummy.png" alt="">
                <div class=" hidden lg:block">
                    <h2 class=" font-bold text-black text-base leading-150">Stéphane</h2>
                    <p class=" text-light-gray font-medium text-[11px] leading-150 mt-1">Geschäftsführer</p>
                </div>
                <CommonIconsIcon className="w-6  cursor-pointer h-6 hidden lg:inline" name="iconChavrlionDown" />

            </div>
        </div>
    </div>
</template>
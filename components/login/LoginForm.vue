<template>
  <div class="h-screen relative">
    <LoginSliderCover />

    <div
      class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[300px] min-[375px]:min-w-[360px]"
    >
      <CustomUiWhiteCard class="!p-[clamp(20px,4.44444444444vw,64px)]">
        <NuxtLink href="/">
          <img
            class="w-[clamp(280,25vw,360px)] min-[375px]:w-[clamp(300,25vw,360px)] h-[clamp(162px,12.6388888889vw,182px)]"
            src="~/public/assets/images/webp/logo_toscatours_20jahre.webp"
            alt="page logo"
          />
        </NuxtLink>
        <h2 class="my-6 text-black text-xl font-semibold leading-140">
          Schön, dich wiederzusehen
        </h2>
        <form action="">
          <div class="flex flex-col gap-y-2 mb-4">
            <label
              class="ms-3 leading-[1] text-[11px] font-normal tracking-[.3px] text-light-gray"
              for="email"
              >Login</label
            >
            <input
              class="border-solid border border-gray-white placeholder:text-base placeholder:leading-150 placeholder:font-medium leading-150 text-black font-medium placeholder:text-[#ADADAE] py-3 px-4 bg-off-white rounded-24"
              id="email"
              type="text"
              placeholder="Email or phone number"
            />
          </div>
          <div class="flex flex-col gap-y-2 mb-4 relative">
            <span
              @click="handleShowPassword"
              class="absolute top-[calc(11px_+_50%)] -translate-y-1/2 right-[18px] inline-block"
            >
              <CommonIconsEye :revealPass="revealPass" />
            </span>
            <label
              class="ms-3 leading-[1] text-[11px] font-normal tracking-[.3px] text-light-gray"
              for="password"
              >Password</label
            >
            <input
              class="border-solid border border-gray-white placeholder:text-base placeh placeholder:leading-150older:font-medium leading-150 text-black font-medium placeholder:text-[#ADADAE] py-3 px-4 bg-off-white rounded-24"
              id="password"
              :type="revealPass"
              placeholder="Enter password"
            />
          </div>
          <div class="flex justify-between items-center">
            <div
              @click="handleSaveInfo"
              class="text-xs font-normal leading-160 text-netural flex items-center cursor-pointer"
            >
              <span
                class="relative inline-block w-10 h-5 border-solid border-[.5px] bg-off-white rounded-[36px] border-gray-white after:h-4 after:w-4 after:rounded-full after:bg-white after:[1px_1px_2px_-1px_#3333334D] after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:absolute after:transition-all after:duration-300 after:ease-linear transition-all duration-300 ease-linear"
                :class="{
                  'after:!left-[21px] !bg-orange after:!shadow-none': saveInfo === true,
                }"
              />&nbsp; Remember me
            </div>
            <NuxtLink class="text-xs font-normal leading-160 text-orange"
              >Forgot password?</NuxtLink
            >
          </div>
          <button
            class="w-full py-2.5 transition-all duration-300 ease-linear text-light-gray bg-gray-white hover:bg-orange hover:text-white font-medium text-xl leading-140 rounded-24 text-center mt-6"
          >
            Log in
          </button>
        </form>
      </CustomUiWhiteCard>
    </div>
  </div>
</template>
<script setup>
// Import the necessary functions from the Composition API
import { ref } from "vue";

// Define the reactive variable
const saveInfo = ref(false);

// Define the function
const handleSaveInfo = () => {
  saveInfo.value = !saveInfo.value;
  console.log(saveInfo.value);
};
const revealPass = ref("password");

// Define the function
const handleShowPassword = () => {
  revealPass.value = revealPass.value === "password" ? "text" : "password";
  console.log(revealPass.value);
};
</script>

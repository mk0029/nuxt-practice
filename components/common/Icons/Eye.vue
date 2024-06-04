<script setup lang="ts">
const props = defineProps({
    revealPass: String,
});
</script>
<template>
    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class=" transition-all duration-100 ease-linear" :class="{ 'stroke-orange': revealPass === 'text' }"
            d="M2.5868 8.87634C4.36623 10.6454 7.46953 13.0975 11.0002 13.0975C14.5308 13.0975 17.6335 10.6454 19.413 8.87634C19.8823 8.4098 20.1177 8.17572 20.2671 7.71765C20.3738 7.39082 20.3738 6.80427 20.2671 6.47744C20.1177 6.01934 19.8823 5.78524 19.413 5.31864C17.6335 3.54962 14.5308 1.09753 11.0002 1.09753C7.46953 1.09753 4.36623 3.54962 2.5868 5.31864C2.11714 5.78556 1.88229 6.01918 1.7328 6.47743C1.62618 6.80427 1.62618 7.39082 1.7328 7.71765C1.88229 8.1759 2.11714 8.40943 2.5868 8.87634Z"
            stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path class=" transition-all duration-100 ease-linear" :class="{ 'stroke-orange': revealPass === 'text' }"
            d="M9 7.09753C9 8.2021 9.89543 9.09753 11 9.09753C12.1046 9.09753 13 8.2021 13 7.09753C13 5.99296 12.1046 5.09753 11 5.09753C9.89543 5.09753 9 5.99296 9 7.09753Z"
            stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg></template>
<template>
    <div class=" bg-white rounded-24 p-6" :class="class">
        <slot />
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    class: String,
});
</script>
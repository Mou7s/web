<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
    <div class="rounded-lg bg-white p-4">
        <label class="relative flex items-center">
            <input type="checkbox" />
            {{ text }}
            <!-- checkButton -->
            <span></span>
        </label>
    </div>
</template>

<style scoped></style>
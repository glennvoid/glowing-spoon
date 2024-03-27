<script setup lang="ts">
defineProps<{
    name?: string
}>()
</script>

<template>
    <h1 class="text-3xl font-bold underline">
        Hello world! {{ name }}
    </h1>
</template>
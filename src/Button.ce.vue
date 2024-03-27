<script setup lang="ts">
import ChildSFC from './Child.ce.vue'
function greetings() {
    console.log("Hello, Wolrd!")
}
</script>

<template>
    <button @click="greetings">click me</button>
    <slot />
    <ChildSFC />
</template>
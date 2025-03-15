<template>
    <div class="px-6 py-8 flex items-center justify-center">
        <button @click="counter++" class="p-5 rounded-3xl transition-colors bg-gradient-to-r from-emerald-300 to-emerald-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-emerald-900">
            Counter: {{ counter }}
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const counter = ref(0)
</script>

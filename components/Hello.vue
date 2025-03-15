<template>
    <div class="px-6 py-8 flex items-center justify-center">
        <Button type="button" :label="`Counter ` + counter" icon="pi pi-plus" @click="counter++"
            class="p-5 rounded-3xl transition-colors" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
</script>

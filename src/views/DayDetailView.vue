<template>
    <div>Detail dne: {{ date }}</div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const date = route.params.date
</script>

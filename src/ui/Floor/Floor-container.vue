<template>
    <div class="Floor-container flex flex-col gap-4">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    import FloorProps from '~/ui/Floor/FloorProps'

    defineProps<FloorProps>()
</script>

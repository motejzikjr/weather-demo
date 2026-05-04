<template>
    <div
        class="Floor"
        :class="variant"
    >
        <div class="Floor-container">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import FloorProps from '~/ui/Floor/FloorProps'

    defineProps<FloorProps>()
</script>

<style lang="scss">
    @import '~/ui/Floor/Floor.scss';
</style>

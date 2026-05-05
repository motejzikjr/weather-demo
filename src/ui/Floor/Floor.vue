<template>
    <div
        class="Floor"
        :class="variant"
    >
        <FloorContainer v-bind="$props">
            <slot></slot>
        </FloorContainer>
    </div>
</template>

<script setup lang="ts">
    import FloorProps from '~/ui/Floor/FloorProps'
    import FloorContainer from '~/ui/Floor/Floor-container.vue'

    defineProps<FloorProps>()
</script>

<style lang="scss">
    @import '~/ui/Floor/Floor.scss';
</style>

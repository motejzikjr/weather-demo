<template>
    <button
        class="Button typo-link-large"
        :class="variant"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    import ButtonProps from '~/ui/Button/ButtonProps'

    defineProps<ButtonProps>()
</script>

<style lang="scss">
    @import '~/ui/Button/Button.scss';
</style>

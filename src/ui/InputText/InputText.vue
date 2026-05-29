<template>
    <input
        class="InputText"
        :value="value"
        :placeholder="placeholder"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
</template>

<script setup lang="ts">
    import InputTextProps from '~/ui/InputText/InputTextProps'

    defineProps<InputTextProps>()

    const emit = defineEmits<{
        (e: 'update:modelValue', value: string): void
    }>()
</script>

<style lang="scss">
    @import '~/ui/InputText/InputText.scss';
</style>

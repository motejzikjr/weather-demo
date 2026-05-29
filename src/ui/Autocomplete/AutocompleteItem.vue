<template>
    <li
        class="Autocomplete-item"
        @click="emit('select', value)"
    >
        {{ name }}
    </li>
</template>

<script setup lang="ts">
    import AutocompleteItemProps from '~/ui/Autocomplete/AutocompleteItemProps'

    defineProps<AutocompleteItemProps>()

    const emit = defineEmits<{
        (e: 'select', value: string): void
    }>()
</script>

<template>
    <ul class="Autocomplete-list">
        <AutocompleteItem
            v-for="item in items"
            :key="item.value"
            :name="item.name"
            :value="item.value"
            @select="emit('select', $event)"
        />
    </ul>
</template>

<script setup lang="ts">
    import AutocompleteListProps from '~/ui/Autocomplete/AutocompleteListProps'
    import AutocompleteItem from '~/ui/Autocomplete/AutocompleteItem.vue'

    defineProps<AutocompleteListProps>()

    const emit = defineEmits<{
        (e: 'select', value: string): void
    }>()
</script>

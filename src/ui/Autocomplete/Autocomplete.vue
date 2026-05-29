<template>
    <div class="Autocomplete">
        <InputText
            :value="value"
            :placeholder="placeholder"
            @update:model-value="emit('change', $event)"
        />
        <AutocompleteList
            v-if="items.length > 0"
            :items="items"
            @select="emit('select', $event)"
        />
    </div>
</template>

<script setup lang="ts">
    import AutocompleteProps from '~/ui/Autocomplete/AutocompleteProps'
    import InputText from '~/ui/InputText/InputText.vue'
    import AutocompleteList from '~/ui/Autocomplete/AutocompleteList.vue'

    defineProps<AutocompleteProps>()

    const emit = defineEmits<{
        (e: 'change', value: string): void
        (e: 'select', value: string): void
    }>()
</script>

<style lang="scss">
    @import '~/ui/Autocomplete/Autocomplete.scss';
</style>

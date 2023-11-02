<script setup lang="ts">
import IconFilter from '../icons/IconFilter.vue';
import FilterOptions from './FilterOptions.vue';
import { useMeetingStore } from '../../stores/MeetingStore';

const meetings = useMeetingStore();

const toggleFilterOptions = () => {
    meetings.toggleFilterOptions();
}

</script>

<template>
    <div class="sm:relative">
        <button @click="toggleFilterOptions()" 
            class="w-24 p-3 rounded-t flex justify-between items-center rounded transition duration-500 ease-in-out"
            :class="{ 'bg-gray-200 z-10 relative': meetings.showFilterOptions }"
        >
            <IconFilter /> Filter
        </button>
        <FilterOptions v-show="meetings.showFilterOptions" />
    </div>
</template>
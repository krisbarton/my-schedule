<script setup lang="ts">
import IconCalendarDay from '../icons/IconCalendarDay.vue';
import IconCalendarWeek from '../icons/IconCalendarWeek.vue';
import IconCalendarMonth from '../icons/IconCalendarMonth.vue';
import IconReset from '../icons/IconReset.vue';
import { useMeetingStore } from '../../stores/MeetingStore';

const meetingStore = useMeetingStore(); 

</script>

<template>
    <section 
        class="absolute top-14 sm:top-12 right-0 sm:right-0 sm:max-w-none w-full sm:w-96 w- z-20 flex sm:p-5 justify-between bg-gray-200 text-sm rounded"
    >
        <button @click="meetingStore.filterByDay()" class="flex flex-wrap justify-center w-20">
            <div class="w-6 h-6 my-2">
                <IconCalendarDay />
            </div>
            <span class="w-full">Today</span>
        </button>
        <button @click="meetingStore.filterByWeek()" class="flex flex-wrap justify-center w-20">
            <div class="w-6 h-6  my-2">
                <IconCalendarWeek />
            </div>
            <span class="w-full">This Week</span>
        </button>
        <button @click="meetingStore.filterByThisMonth()" class="flex flex-wrap justify-center w-20">
            <div class="w-6 h-6  my-2">
                <IconCalendarMonth />
            </div>
            <span class="w-full">This Month</span>
        </button>
        <button @click="meetingStore.resetFilters()" class="flex flex-wrap justify-center w-20">
            <div class="w-6 h-6  my-2">
                <IconReset />
            </div>
            <span class="w-full">Reset Filters</span>
        </button>
    </section>
</template>
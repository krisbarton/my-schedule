<script setup lang="ts">
import { timeFormat, pastTime } from '../../helpers/timeFormat';

const props = defineProps(['meetingTitle', 'meetingDate']);
const { meetingTitle, meetingDate } = props;

const meetingTime = timeFormat(meetingDate);

</script>

<template>
    <section class="my-2 p-4 border border-gray-300 rounded"
        :class="{ 'bg-gray-400 text-gray-600': pastTime(meetingDate) }">
        <div class="text-sm font-bold border-b border-gray-300 mb-2 pb-1">@ {{ meetingTime }}</div>
        <div class="text-xl">{{ meetingTitle }}</div>
    </section>
</template>
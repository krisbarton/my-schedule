<script setup lang="ts">
import { useMeetingStore } from '../../stores/MeetingStore';
import IconDelete from '../icons/IconDelete.vue';
import { longFormat } from '../../helpers/dateFormat';

const meetings = useMeetingStore();

const props = defineProps(['meetingDate', 'meetingTitle', 'meetingTime', 'meetingId']);

const { meetingDate, meetingTitle, meetingId } = props;

const removeMeeting = (id: string) => {
    meetings.remove(id);
}

</script>

<template>
    <div class="bg-gray-200 rounded my-10 p-3 flex border-gray-300 border shadow-sm relative items-center">
        <div class="block w-40 text-center text-sm absolute mx-auto -inset-6 bg-blue-500 text-white p-2 z-10 h-max border border-blue-600">
            {{ longFormat(meetingDate) }}
        </div>
        <h3 class="text-2xl my-2 w-full">{{ meetingTitle }}</h3>
        <button @click="removeMeeting(meetingId)" class="w-5 h-5 hover:transform hover:rotate-45 transition duration-500 ease-in-out">
            <IconDelete />
        </button>
    </div>
</template>../../helpers/dateFormat
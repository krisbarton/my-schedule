<script setup lang="ts">
import { useMeetingStore } from '../../stores/MeetingStore';
import MeetingForm from './MeetingForm.vue';
import IconCalendar from '../icons/IconCalendar.vue';

const meetings = useMeetingStore();

const scheduleMeeting = () => {
    meetings.toggleForm();
    meetings.titleIsValid = true;
    meetings.dateIsValid = true;
}

</script>

<template>
    <div class="flex justify-center py-3 sm:p-5 relative content-center items-center">
        <button @click="scheduleMeeting" 
            class="btn">
            <IconCalendar />
            Add a Meeting
        </button>
        <MeetingForm />
    </div>
</template>
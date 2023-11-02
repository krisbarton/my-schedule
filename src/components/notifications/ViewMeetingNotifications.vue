<script setup lang="ts">
    import { useMeetingStore } from '../../stores/MeetingStore';
    import ViewMeetingNotifications from '../view/ViewMeetingNotification.vue';
    const meetings = useMeetingStore();
</script>

<template>
    <div class="bg-gray-200 rounded absolute top-14 p-6 w-full sm:w-96 z-20">
        <h3 class="text-center font-bold text-2xl">Todays Meetings</h3>
        <ViewMeetingNotifications 
            v-for="meeting in meetings.todaysMeetings" 
            :key="meeting.id"
            :meetingDate="meeting.date"
            :meetingTitle="meeting.title"
        />
    </div>
</template>
<script setup lang="ts">
    import IconNotification from '../icons/IconNotification.vue';
    import ViewMeetingNotifications from '../notifications/ViewMeetingNotifications.vue';
    import { useMeetingStore } from '../../stores/MeetingStore';

    const meetings = useMeetingStore();

    const toggleNotifications = () => {
        meetings.toggleNotifications();
    }
</script>

<template>
    <button 
        @click="toggleNotifications()" 
        class="w-14 relative p-3 rounded"
        :class="{ 'bg-gray-200 z-10 relative': meetings.showNotifications }"
    >
        <IconNotification />
        <span 
            v-show="meetings.todaysMeetings && meetings.todaysMeetings.length > 0"
            class="rounded-full bg-red-700 text-white text-xs absolute -top-0.5 -right-0.5 p-1 w-5 h-5 flex justify-center content-center items-center">
            {{  meetings.todaysMeetings.length  }}
        </span>
    </button>
    <ViewMeetingNotifications v-show="meetings.showNotifications" />
</template>
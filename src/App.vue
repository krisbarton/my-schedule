<script setup lang="ts">
import AddMeeting from './components/add/AddMeeting.vue';
import ViewMeeting from './components/view/ViewMeeting.vue';
import FilterMeeting from './components/filterMeeting/FilterMeeting.vue';
import MeetingNotifications from './components/notifications/MeetingNotifications.vue';
import { useMeetingStore } from './stores/MeetingStore';
import { storeToRefs } from 'pinia';

const meetingStore = useMeetingStore();

const hasMeetings = () => {
  return meetingStore.meetings.length > 0;
};

const toggleOverlayOptions = () => {
  if(meetingStore.showFilterOptions) {
    meetingStore.toggleFilterOptions();
  }

  if(meetingStore.showForm) {
    meetingStore.toggleForm();
  }

  if(meetingStore.showNotifications) {
    meetingStore.toggleNotifications();
  }
}

const { meetings } = storeToRefs(meetingStore);

</script>

<template>
  <div 
    class="absolute w-full h-full left-0 bg-black opacity-40 z-10 transition duration-500 ease-in-out" 
    v-show="meetingStore.showForm || meetingStore.showFilterOptions || meetingStore.showNotifications"
    @click="toggleOverlayOptions()"
  ></div>

  <header class="bg-gray-900 text-white p-5">
      <h1 class="text-3xl font-bold w-full text-center">My<span class="text-green-600">Scheduler</span></h1>
  </header>

  <main class="flex flex-wrap justify-center">
    <section class="flex flex-wrap w-full justify-center items-center relative">
      <AddMeeting />
      <div class="w-full flex justify-center m-1 relative">
        <FilterMeeting />
        <MeetingNotifications />
      </div>
    </section>
    <section class="px-3 py-1 w-full max-w-3xl" v-if="hasMeetings()">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">{{ meetingStore.meetingsTitle }}</h2>
      <ViewMeeting
        v-for="meeting in meetings"
        :key="meeting.id"
        :meeting-id="meeting.id"
        :meeting-date="meeting.date"
        :meeting-title="meeting.title"
      />
    </section>
    <section class="w-full p-7" v-else>
        <p class="text-center text-2xl">{{ meetingStore.noMeetingsTitle }}</p>
    </section>
  </main>
</template>

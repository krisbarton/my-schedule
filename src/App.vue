<script setup lang="ts">
import AddMeeting from './components/add/AddMeeting.vue';
import ViewMeeting from './components/view/ViewMeeting.vue';
import { useMeetingStore } from './stores/MeetingStore';

const meetingStore = useMeetingStore();
</script>

<template>
  <header>
    <h1 class="text-3xl font-bold underline">MySchedule</h1>
  </header>

  <main>
    <AddMeeting />
    <section  v-if="meetingStore.meetings">
      <ViewMeeting
        v-for="meeting in meetingStore.meetings"
        :key="meeting.id"
        :meeting="meeting"
      />
    </section>
  </main>
</template>

<style scoped>
</style>

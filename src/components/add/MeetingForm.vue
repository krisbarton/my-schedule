<script setup lang="ts">
import { ref } from 'vue';
import { useMeetingStore } from '../../stores/MeetingStore';
import { UUID } from '../../helpers/uuid';
import IconClose from '../icons/IconClose.vue';
import type { IMeeting } from '@/types/Meeting';

const meetings = useMeetingStore();

const title = ref('');
const meetingDate = ref('');

const reset = () => {
    title.value = '';
    meetingDate.value = '';
}

const logTitleChanges = () => {
    meetings.titleIsValid = title.value !== '';
}

const logDateChanges = () => {
    meetings.dateIsValid = meetingDate.value !== '';
}

const addMeeting = () => {
    meetings.titleIsValid = title.value !== '';
    meetings.dateIsValid = meetingDate.value !== '';
    if(meetings.titleIsValid && meetings.dateIsValid) {
        const data: IMeeting = { id: UUID(), title: title.value, date: meetingDate.value };
        meetings.add(data);
        meetings.toggleForm();
        meetings.sort(meetings.meetings);
        reset();
        meetings.resetFilters();
    }
}

const closeMeetingForm = () => {
    meetings.toggleForm();
    reset();
}

</script>

<template>
    <Transition>
        <section 
            v-show="meetings.showForm" 
            class="bg-gray-900 text-white m-auto p-4 flex flex-wrap fixed top-20 left-0 right-0 z-20 w-80 rounded transition duration-300 ease-in-out"
        >
            <button @click="closeMeetingForm" class="w-3 absolute top-3 right-3"><IconClose /></button>
            <h3 class="text-center w-full text-2xl font-bold my-3"><span class="text-green-500">Schedule</span> a Meeting</h3>
            <label class="w-full" for="title">Meeting Title</label>
            <input class="w-full text-black px-3 py-2 my-3" 
                :class="{'bg-red-500 text-white': !meetings.titleIsValid }"
                v-model="title" type="text" name="title"
                @input="logTitleChanges()" />
            <label class="w-full" for="meeting-date">Meeting Date and Time</label>
            <input class="w-full text-black px-3 py-2 my-3" 
                :class="{'bg-red-500 text-white': !meetings.dateIsValid }"
            v-model="meetingDate" type="datetime-local" name="meeting-date"
            @input="logDateChanges()" />
            <div v-show="!meetings.titleIsValid || !meetings.dateIsValid" class="text-red-500">Please add a meeting title and a date</div>
            <button class="btn w-full p-2 justify-center my-2" @click="addMeeting">Add</button>
        </section>
    </Transition>
</template>../../helpers/uuid
import { defineStore } from "pinia";
import type { IMeeting } from '@/types/Meeting';
import { thisWeek } from "@/helpers/thisWeek";

const initialState = {
    meetings: [] as IMeeting[],
    filteredMeetings: [] as IMeeting[],
    storedMeetings: [] as IMeeting[],
    todaysMeetings: [] as IMeeting[],
    showForm: false as boolean,
    showFilterOptions: false as boolean,
    showNotifications: false as boolean,
    meetingsTitle: 'My meetings' as string,
    noMeetingsTitle: 'No meetings are currently scheduled' as string,
    titleIsValid: true as boolean,
    dateIsValid: true as boolean,
}

export const useMeetingStore = defineStore("MeetingStore", {
    state: () => (initialState),
    actions: {
        add(data: IMeeting) {
            this.storedMeetings.push(data);
            this.meetings = this.storedMeetings;
            this.checkNotifications();
        },
        sort(data: IMeeting[]) {
            data.sort((a: IMeeting, b: IMeeting) => {
                const firstDate: any = new Date(a.date);
                const nextDate: any = new Date(b.date);
                return firstDate - nextDate;
            });
        },
        remove(meetingId: string) {
            this.resetFilters();
            this.meetings = this.meetings.filter((meeting: IMeeting) => {
                return meeting.id !== meetingId;
            });
            this.storedMeetings = this.meetings;
            this.checkNotifications();
        },
        toggleForm() {
            this.showForm = !this.showForm;
        },
        toggleFilterOptions() {
            this.showFilterOptions = !this.showFilterOptions;
        },
        toggleNotifications() {
            this.showNotifications = !this.showNotifications;
        },
        checkNotifications() {
            this.meetings = this.storedMeetings;
            this.todaysMeetings = this.meetings.filter((meeting: IMeeting) => {
                const today = new Date();
                const meetingDate = new Date(meeting.date);

                return (
                    meetingDate.getDate() === today.getDate()
                    && meetingDate.getMonth() === today.getMonth()
                    && meetingDate.getFullYear() === today.getFullYear()
                );
            });
        },
        filterByDay() {
            this.meetings = this.storedMeetings;
            this.meetingsTitle = 'Today\'s meetings';
            this.noMeetingsTitle = 'No meetings for today';
            this.meetings = this.meetings.filter((meeting: IMeeting) => {
                const today = new Date();
                const meetingDate = new Date(meeting.date);
                return (
                    meetingDate.getDate() === today.getDate()
                    && meetingDate.getMonth() === today.getMonth()
                    && meetingDate.getFullYear() === today.getFullYear()
                );
            });
            this.showFilterOptions = false;
        },
        filterByWeek() {
            this.meetings = this.storedMeetings;
            this.meetingsTitle = 'Meetings this week';
            this.noMeetingsTitle = 'No meetings this week';
            this.meetings = this.meetings.filter((meeting: IMeeting) => {
                const meetingDate: any = new Date(meeting.date);
                const { firstDay, lastDay } = thisWeek();
                return (
                    meetingDate >= firstDay
                    && meetingDate <= lastDay
                );
            });
            this.showFilterOptions = false;
        },
        filterByThisMonth() {
            this.meetings = this.storedMeetings;
            this.meetingsTitle = 'Meetings this month';
            this.noMeetingsTitle = 'No meetings this month';
            this.meetings = this.meetings.filter((meeting: IMeeting) => {
                const meetingDate: any = new Date(meeting.date);
                const today: any = new Date();
                return (
                    meetingDate.getMonth()  === today.getMonth()
                    && meetingDate.getFullYear() === today.getFullYear()
                );
            });
            this.showFilterOptions = false;
        },
        resetFilters() {
            this.meetingsTitle = 'My meetings';
            this.noMeetingsTitle = 'No meetings are currently scheduled';
            this.meetings = this.storedMeetings;
            this.showFilterOptions = false;
        }
    },
});
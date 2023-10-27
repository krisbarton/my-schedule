import { defineStore } from "pinia";

export const useMeetingStore = defineStore("MeetingStore", {
    // state
    state: () => {
        return {
            meetings: [{}] as any,
        };
    }
    // actions

    // getters
});
export const thisWeek = () => {
    const today = new Date();
    const firstDay = new Date(today.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)));
    const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7));
    
    firstDay.setHours(0);
    firstDay.setMinutes(0);
    firstDay.setSeconds(0);
    firstDay.setMilliseconds(0);

    lastDay.setHours(23);
    lastDay.setMinutes(59);
    lastDay.setSeconds(59);
    lastDay.setMilliseconds(59);

    return {
        firstDay,
        lastDay,
    };
}
export const timeFormat = (date: string) => {
    const newTime: Date = new Date(date);
    const timeOptions: Intl.DateTimeFormat = new Intl.DateTimeFormat("en", {
        timeStyle: "short",
     });
     return timeOptions.format(newTime);
}

export const pastTime = (time: string) => {
    const newTime: any = new Date(time);
    const currentTime: any = new Date();

    return newTime > currentTime ? false : true;

}
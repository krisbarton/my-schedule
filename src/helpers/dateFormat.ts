export const longFormat = (date: string) => {
    const newDate: Date = new Date(date);
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return newDate.toLocaleDateString('en-GB', options).split(',').join(' ');
}
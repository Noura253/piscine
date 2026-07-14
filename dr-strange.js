function addWeek(date) {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday",
    ];

    const epoch = new Date("0001-01-01T00:00:00Z");
    const oneDay = 24 * 60 * 60 * 1000;

    const diffDays = Math.floor((date.getTime() - epoch.getTime()) / oneDay);

    return days[((diffDays % 14) + 14) % 14];
}

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);

    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);

    return newDate;
}
 
function matchCron(cron, date) {
    const [min, hour, day, month, weekDay] = cron.split(" ");

    const values = [
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,
        date.getDay() === 0 ? 7 : date.getDay(), // 1=Lundi ... 7=Dimanche
    ];

    const pattern = [min, hour, day, month, weekDay];

    for (let i = 0; i < 5; i++) {
        if (pattern[i] !== "*" && Number(pattern[i]) !== values[i]) {
            return false;
        }
    }

    return true;
}
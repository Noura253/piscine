function sunnySunday(date) {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const epoch = new Date("0001-01-01T00:00:00Z");
    const oneDay = 24 * 60 * 60 * 1000;

    const totalDays = Math.floor((date.getTime() - epoch.getTime()) / oneDay);

    // Nombre de dimanches passés
    const sundays = Math.floor(totalDays / 7);

    // Jours restants après suppression des dimanches
    const sunnyDays = totalDays - sundays;

    return days[sunnyDays % 6];
}
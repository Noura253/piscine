function dayOfTheYear(date) {
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const oneDay = 24 * 60 * 60 * 1000;

    return Math.floor((date - firstDay) / oneDay);
}
 
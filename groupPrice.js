function groupPrice(str) {
    const rege = /[A-Z]{3}(\d+)\.(\d+)/g;
    return [...str.matchAll(rege)].map(match => [
        match[0],
        match[1],
        match[2],
    ]);
}
 
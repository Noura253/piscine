function getURL(dataSet) {
    return dataSet.match(/https?:\/\/[^\s]+/g) || [];
}

function greedyQuery(dataSet) {
    return dataSet.match(/https?:\/\/[^\s?]+\?[^\s=&]+=[^\s=&]+(?:&[^\s=&]+=[^\s=&]+){2,}/g) || [];
}

function notSoGreedy(dataSet) {
    return dataSet.match(/https?:\/\/[^\s?]+\?[^\s=&]+=[^\s=&]+(?:&[^\s=&]+=[^\s=&]+){1,2}(?!&)/g) || [];
}
 

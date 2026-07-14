
function getURL(str){
    
    return str.match(/https?:\/\/\S+/g) || [];
}
 function greedyQuery(dataSet) {
    return dataSet.match(/https?:\/\/\S+\?\S+=\S+(?:&\S+=\S+){2,}/g) || [];
}

function notSoGreedy(dataSet) {
    return dataSet.match(/https?:\/\/\S+\?\S+=\S+(?:&\S+=\S+){1,2}(?!&)/g) || [];
}

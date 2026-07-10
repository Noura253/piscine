function first(value) {
    return value[0];
}

function last(value) {
    return value[value.length - 1];
}

function kiss(value) {
    return [last(value), first(value)];
}

// Tests
console.log(first([1, 2, 3])); // 1
console.log(first("hello"));   // "h"

console.log(last([1, 2, 3]));  // 3
console.log(last("hello"));    // "o"

console.log(kiss([1, 2, 3]));  // [3, 1]
console.log(kiss("hello"));    // ["o", "h"]
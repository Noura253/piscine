function get(key) {
    return sourceObject[key];
}
console.log(get("num")); // Should output 42
console.log(get("bool")); // Should output true
console.log(get("str")); // Should output 'some text'
function set(key, value) {
    sourceObject[key] = value;
    return value;
}
c 
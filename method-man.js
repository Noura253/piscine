function words(str){
return str.split(" ");
}
function sentence(arr){
arr.join(" ");
}
function yell(str){
return str.toUpperCase();
}
function whisper(str){

return "*"+str.toLowerCase()+"*";
}
function capitalize(str){
return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
// Test words function
console.log(words("Hello there, how are you?"));
// Should output: ["Hello", "there,", "how", "are", "you?"]

// Test sentence function
console.log(sentence(["This", "is", "a", "test"]));
// Should output: "This is a test"

// Test yell function
console.log(yell("be quiet"));
// Should output: "BE QUIET"

// Test whisper function
console.log(whisper("EXCUSE ME"));
// Should output: "*excuse me*"

// Test capitalize function
console.log(capitalize("rUNNING"));
// Should output: "Running"
function reverse(value){
    let result;
if(typeof value=="string"){
result="";
for(let i=value.length-1;i>=0;i--){
    result+=value[i];
}
}
else{
result=[];
for(let i=value.length-1;i>=0;i--){
    result.push(value[i]);
}
}
return result;
}

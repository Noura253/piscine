function pyramid(char,n){
let result="";
for (let i=1;i<=n;i++){
for(let j=0;j<n-i;j++){
    result+=" ";
}
for(let j=0;j<2*i-1;j++){
    result+=char;
}
if(i<n){
result+="\n";
}
}
return result;
}
 
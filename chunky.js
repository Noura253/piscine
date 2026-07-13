function chunk(arr,n){
let result=[];
for(let i=0;i<arr.length;i+=n){
    let temp=[];
    for(let j=i;j<i+n && j<arr.length;j++){
        temp.push(arr[j]);
    }
    result.push(temp);
}
return result;
}
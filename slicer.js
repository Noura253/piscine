function slice(data,start,end){
const length=data.length;
if(start<0)start=length+start;
if(start<0) start=0;
if(start>length)start=length;
if(end=== undefined) end =length;
if(end<0)end =length+end;
if(end<0) end= 0;
if(end>length)end =length;
let result=Array.isArray(data) ? [] : "";
for(let i=start;i<end;i++){
    if(Array.isArray(data)){
        result.push(data[i]);
    }
    else{
        result+=data[i];
    }
}
return result;
}
 
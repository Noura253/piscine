
function RNA(str){
 let result ="";
for(let i=0;i<str.length;i++){
if(str[i] === "G") result+= "C";
if(str[i] ==="C") result+="G";
if( str[i] === "T") result+= "A";
if(str[i] ==="A") result+= "U";
    }
return result;
}
 

function DNA(str){
 let result ="";
 for(let i=0;i<str.length;i++){
if(str[i] === "C") result+= "G";
if(str[i] ==="G") result+="C";
if( str[i] === "A") result+= "T";
if(str[i] ==="U") result+= "A";
    }
 return result;
}

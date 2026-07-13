function vowelDots(str){
    let result="";
for(let i=0;i<str.length;i++){
    if( str[i]==="a"|| 
        str[i]==="e"||
        str[i]==="i"||
        str[i]==="o"||
        str[i]==="u"){
     result+=str[i]+".";
    }
    else{
        result+=str[i];
    }
    
}
return result;
}

 
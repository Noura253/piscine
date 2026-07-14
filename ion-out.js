function ionout(str){
let result=[];
let words=str.split(" ");
for(let i=0;i<words.length;i++){
     if(words[i].endsWith("tion")){
        result.push(words[i].slice(0, -3));
     }

}
return result;
}


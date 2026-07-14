
function sameAmount(str,exp1,exp2){
   let count1=(str.match(exp1)|| []).length;
   let count2=(str.match(exp2)||[]).length;

return count1===count2;
}
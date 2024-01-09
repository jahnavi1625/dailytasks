
console.log("without using reverse method")
function arrRever(arr2){
    let reve=[];
    for(let i=arr2.length-1;i>=0;i--){
         reve.push(arr2[i])
    }
    return reve;
}
const arr3=[1,2,3,4,5];
console.log("rev array ",arrRever(arr3))

console.log("using reverse method")
function arrRever1(arr4){
    
let rev=arr4.reverse();
return rev;
}
const arr5=[1,2,3,4,5];
console.log("rev array ",arrRever1(arr5))



console.log("palindrome number for array program");
function palinDrome(ary){
    for(let i=0;i<ary.length/2;i++){
         if(ary[i]!==ary[ary.length-1-i])
         {
            return "not a palindrome";
         }
    }
    return "is a palindrome";
}
const ary1=[1,2,3,2,1];
let drome=palinDrome(ary1);
console.log(drome);

console.log("palindrome number program");
function palinDrome1(n){
    let ary1=n.toString();
    for(let i=0;i<ary1.length/2;i++){
         if(ary1[i]!==ary1[ary1.length-1-i])
         {
            return "not a palindrome";
         }
    }
    return "is a palindrome";
}
const ary11=121;
let drome1=palinDrome1(ary11);
console.log(drome1);

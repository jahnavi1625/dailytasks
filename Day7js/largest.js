let ar=[3,1,9,2,7,4,11];
ar.sort(function(a,b){
    return a-b;
});
console.log(ar);
console.log("largerst number is ",ar[ar.length-1]);
console.log("Third largerst number is ",ar[ar.length-3]);

let arr=[3,6,1,3,9,5,7,2,3];
arr.sort(function(a,b){
    return a-b;
});
console.log("array with duplicate elements ",arr);
let arr1=[];
for(let i=0;i<arr.length;i++){
    if(arr1.indexOf(arr[i])==-1){
        arr1.push(arr[i]);
    }
}
console.log("array without duplicate elements ",arr1);

// let uniAr=Array.from(new Set(arr));
// console.log(uniAr);
let newAr=[];
for(let i=2000;i<=2040;i++){
    if(i%4==0 && (i%100!==0 || i%400==0))
    {
        newAr.push(i);
    }
}
console.log("leap years from 2000 to 2040 ",newAr);

console.log("duplicate element printing");
function duplicate(array){
let a1=[];
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      if(array[i]==array[j]  && !a1.includes(array[i])){
        a1.push(array[i]);
      }
    }
    
    
}
return a1;
}
let a11=[3,6,1,3,9,5,7,2,3];
console.log(duplicate(a11));



var a21 = [1,2,3,2,1];
debugger;
  function reverseArray(a2)
  {
      for(var i=0;i<a2.length/2;i++)
      {
          if(arr[i] !== a2[a2.length-1 -i])
          { 
              return{
                  Notpalindrome:false,arr
              }
          }
      }
      return { palindrome:true,arr  }
  }
  console.log(reverseArray(a21))
console.log("sort an array without predefined");
function sortArr(array1){
    for(let i=0;i<array1.length;i++){
        
        for(let j=0;j<array1.length;j++){
            if(array1[j]>array1[j+1]){
                let temp=array1[j];
                array1[j]=array1[j+1];
                array1[j+1]=temp;

        }
        }
    }
    return array1;
}
const ar=["banana","Orange","Apple","grapes"];
let call=sortArr(ar);
console.log(call);

console.log("sort an array with predefined");
function sortArr1(array1){
    array1.sort();
    return array1;
}
const ar1=[3,1,7,0,4];
let call1=sortArr1(ar1);
console.log(call1);


const arr=["banana","Orange","Apple","grapes"];
arr.sort(function(a,b){
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
});
console.log(arr);

let arr12=[9,1,11,2,6,3,5];
console.log(arr12.sort());
arr12.sort(function(a,b){
    return a-b;//for descending b-a
});
console.log(arr12);
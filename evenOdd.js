function evenOdd(arr){
    let evenArr=[];
        let oddArr=[];
    for(let v1 of arr){
        if(v1%2==0){
           evenArr.push(v1);
        }
       else{
        oddArr.push(v1);
       }
    }
    return{even:evenArr,
        odd:oddArr
        
    };
}
let arr1=[1,2,3,4,5,6,7,8];
let res=evenOdd(arr1);
console.log("even numbers :"+res.even);
console.log("odd numbers :"+res.odd);

// function evenOdd1(arr1){
//     let evenArr1=[];
//         let oddArr1=[];
//     for(let v2 in arr1){
//         if(v2%2==0){
//            evenArr1.push(v2);
//         }
//        else{
//         oddArr1.push(v2);
//        }
//     }
//     return{evenArr1,oddArr1 };
// }
// let arr13=[1,2,3,4,5,6,7,8];
// let res3=evenOdd1(arr13);
// console.log("even numbers :"+res3.evenArr1);
// console.log("odd numbers :"+res3.oddArr1);

function evenOdd1(arr1){
    let evenArr1=[];
        let oddArr1=[];
    for(let v2 in arr1){
        if(v2%2==0){
           evenArr1.push(v2);
        }
       else{
        oddArr1.push(v2);
       }
    }
    return{
        even1:evenArr1,
        odd1:oddArr1
     };
}
let arr13=[1,2,3,4,5,6,7,8];
let res3=evenOdd1(arr13);
console.log("even numbers :"+res3.even1);
console.log("odd numbers :"+res3.odd1);
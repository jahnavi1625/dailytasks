//synchronous
// console.log("start func");
// function abc(){
//     console.log("function abc");

// }
// abc();
// console.log("end func");

//asynchronous
// console.log("asynchronous 1");
// function f1(callback) {
//   setTimeout(function () {
//     console.log("asynchronous 2");
//     callback();
//   }, 2000);
// }
// f1(function () {
//   console.log("asynchronous 3");
// });
// console.log("asynchronous 4");

//promise
console.log("promise 1");
function f2(){
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log("resolve");
            resolve();
          }, 2000);
    })
}
f2().then(function(){
    console.log("reject")
})
console.log("promise 2");

// let myProm=new Promise(function(resolve,reject){
//     let i=0;
//     if(i==0){
//         resolve('success');
//     }else{
//         reject('failure')
//     }
// });
// myProm.then((msg)=>console.log(msg),(msg)=>console.log(msg));

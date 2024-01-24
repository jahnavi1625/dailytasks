//asynchronous
// async function first() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("first");
//       resolve();
//     }, 3000);
//   });
//   second();
  
// }
// async function second() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("second");
//       resolve();
//     }, 2000);
//   });
//   third();
// }
// async function third() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("third");
//       resolve();
//     }, 1000);
//   });
// }
// first();

//json
// fetch("https://jsonplaceholder.typicode.com/comments").then((response)=>console.log(response));
fetch("https://jsonplaceholder.typicode.com/comments")
.then((response)=>response.json())
.then((data)=>console.log(data));//array printed

//old method that is xml http request
let xhr=new XMLHttpRequest();
xhr.open('GET',"https://jsonplaceholder.typicode.com/posts");
xhr.send();
xhr.onload=function(){
    console.log("here xhr");
    if(xhr.status!==200){
        console.log("error");
    }
    else{
        console.log(xhr.response);
    }
}

//factory method reduces the code and reusability
const obj={
    k1:'v1',
    k2:'v2',
    k3:()=>{console.log("hi")}
};
const obj1={
    k1:'v11',
    k2:'v21',
    k3:()=>{console.log("hi")}
};
console.log(obj,obj1);

//instead of this here factory methdo
function objFun(v1,v2){
    return{
        k1:v1,
        k2:v2,
        k3:()=>{console.log("hi")}
    };
}
console.log(objFun('value1','value2'));
console.log(objFun('value11','value21'));

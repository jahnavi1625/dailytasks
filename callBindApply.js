// const person={
//     firstName:"jahnavi",
//     lastName:"ketha"
// }
// function info(p1,p2){
//     console.log(`${p1}, ${this.firstName} ${this.lastName} ${p2}`);
// }
// info.call(person,"hi","how are you");

// info.apply(person,["hi","how are you"]);

// const newOne=info.bind(person,"hi","how are you");//have to store
// console.log(newOne);
// console.log(newOne());

//creating promises
// const p1=Promise.resolve("janu");
// const p2="Dp"
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,"success")
// });
// Promise.all([p1,p2,p3]).then((val)=>{console.log(val)});
// Promise.all([p1,p3,p2]).then((val)=>{console.log(val)});
// Promise.all([p3,p2,p1]).then((val)=>{console.log(val)});

// Promise.race([p1,p2,p3]).then((val)=>{console.log(val)});
// Promise.race([p3,p2,p1]).then((val)=>{console.log(val)});

// const d1=Promise.resolve("jan");
// const d2="Dp"
// const d3=new Promise((resolve,reject)=>{
//     setTimeout(reject,1000,"success")
// });
// Promise.any([d1,d2,d3]).then((val)=>{console.log(val)});
// Promise.race([d1,d2,d3]).then((val)=>{console.log(val)});
// Promise.allSettled([d1,d2,d3]).then((val)=>{console.log(val)});

// sessionStorage.setItem('name','jahnavi');

// document.getElementById('btn').addEventListener('click',()=>{
//     sessionStorage.setItem('name','jahnavi');
//     document.getElementById('h1Ele').innerHTML=sessionStorage.getItem('name')
// });


// document.getElementById('btn').addEventListener('click',()=>{
//     localStorage.setItem('name','jahnavi');
//     document.getElementById('h1Ele').innerHTML=localStorage.getItem('name')
// });

document.getElementById('btn').addEventListener('click',()=>{
    localStorage.setItem('name','jahnavi');
    
});
document.getElementById('h1Ele').innerHTML=localStorage.getItem('name')
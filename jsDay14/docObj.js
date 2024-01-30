// console.log(document);
// setInterval(()=>{
//     document.body.style.backgroundColor=`#${Math.random()
//         .toString()
//         .slice(-6)}`
// document.body.style.color='pink';
// },1000);

// const v1=document.getElementById('e1');
// console.log(v1);
// const v2=document.getElementsByClassName('c1');
// console.log(v2);
// const v3=document.getElementsByTagName(`h1`);
// console.log(v3);
// const v4=document.querySelector('h1');
// console.log(v4);
// const v5=document.querySelectorAll('h1');
// console.log(v5);
// const v6=document.querySelector('#e1');
// console.log(v6);
// document.title='jahnavi';
// console.log(document.head);

//changing content
e1.innerHTML="DurgaPrasad";
console.log(e1.innerHTML);
console.log(e1);
// e1="narsi";
// console.log(e1);

const imgAdhi=document.querySelector("img");
console.log(imgAdhi);
imgAdhi.src="./../images/c1.jpeg";
imgAdhi.alt="c1";
const imgAdhi1=document.querySelector("img");
console.log(imgAdhi1);
document.write("here image");
imgAdhi.style.display="block";

//styling
const v11=document.getElementById('e1');
v11.style.backgroundColor="green";

// document.body.style.backgroundColor="grey";

let bool=true;
function changeColor(){
    if(bool){
        document.body.style.backgroundColor="black";
    }else{
        document.body.style.backgroundColor="pink";
    }
    bool=!bool;
}

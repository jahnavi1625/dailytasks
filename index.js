
// const divCon=document.getElementById('container');
// const header1=document.createElement('h1');
// header1.innerText="heaader from js";
// divCon.appendChild(header1);
// const hsEl=document.getElementById('h5El');
// divCon.appendChild(hsEl);
// divCon.appendChild(header1);
// divCon.insertBefore(header1,hsEl);

// function addFunc(){
//     const ulCon=document.querySelector('#ulCon');
//     // const li=document.querySelector('li');
//     // li.innerHTML="services";
//     // ul.appendChild(li);//id we do like this seervices added at the end but first eleent is deleted

//     const list=document.createElement('li');
//     list.innerHTML="services";
//     ulCon.appendChild(list);
//     console.log(ulCon.children[1]);
//     ulCon.insertBefore(list,ulCon.children[1]);
// }

// function removeFunc(){
//     const ulCon=document.querySelector('#ulCon');
//     ulCon.removeChild(ulCon.children[3]);
// }

//BOM
// console.log(window);
// function addFunc(){
//   window.location.reload();//reloaded when clicked
// }
let flag=false;
const bm=document.getElementById('burger');
document.addEventListener('DOMContentLoaded',()=>{
    
    const navlink=document.getElementById('navlinks');
    bm.addEventListener('click',()=>{
        navlink.classList.toggle('show');//want to use based upon css use classList
        flag=!flag;
        console.log(flag);
        if(flag){
            bm.innerHTML="&#9776";
        }
        else{
            bm.innerHTML="&#10060";
        }
        
    });
});


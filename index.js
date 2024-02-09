// function validateForm(event){
//     event.preventDefault();//synthetic events to make not to go in browser
//     let res=document.forms['form1']['name'].value;
//     console.log(res);
//     if(res==''){
//         // alert("name must be given")
//         // document.write("name")
//         document.getElementById('para').innerText="name must be given;"
//     }
//     else{
//         document.getElementById('para').innerText=`${res} hello hi how do you do`;
//     }
//     return false;
// }

// function changeName(event){
// //   console.log(event);
// console.log(event.target.value);

// }

// function changeColor(){
//     document.body.style.backgroundColor='black';
//     document.body.style.color='white';
// }

// function changeBgColor(){
//     document.body.style.backgroundColor='red';
// }

// function mouseOut(obj){//taking the this instance is another way by calling just mouseOut() in html and here function with mouseOut() then use document
//     // obj.innerText="DurgaPrasad";//mouse events take current instance
//     document.querySelector('p').innerText="Durga"
// }

//adding events dynamically
// document.getElementById('p1').addEventListener('click',mouseOut);
// function mouseOut(){//taking the this instance is another way by calling just mouseOut() in html and here function with mouseOut() then use document
//       document.querySelector('p').innerText="Durga"
//       document.querySelector('p').style.backgroundColor="green"
//       document.querySelector('p').style.color="white"
//      }

document.getElementById('p2').addEventListener('click',pclick);
document.querySelector('div').addEventListener('click',dclick);

function pclick(){
    document.getElementById('p2').innerHTML="changed";
    document.getElementById('p2').style.backgroundColor='orange'
}

function dclick(){
    document.getElementById('p2').innerText="again changed";
    document.querySelector('div').style.backgroundColor='grey'
}
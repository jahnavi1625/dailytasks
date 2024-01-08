var mob=`989656798989 678`;
var pat=/\d{10}/g;
var res=mob.match(pat);
console.log(res);

var pswrd="*Aa@1b@3H";
var pat2=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/;
var res1=pswrd.search(pat2);
console.log(res1);

let password=' Jacksparrow@13k';
let length=/.{8,16}/;
let special=/[^A-Z a-z 0-9]/;
let lowerCase=/[a-z]/;
let upperCase=/[A-Z]/;
let number=/[0-9]/;

if(length.test(password)
&& special.test(password)
&& lowerCase.test(password)
&& upperCase.test(password)
&& number.test(password) ){
console.log(password);
}else {
console.log("password is invalid");
}

var ipAdd="255.0.0.0";
var pat2=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
var res2=pat2.test(ipAdd);
console.log(res2);

var str="bChn as35 [] \n 12bg";
var pat3=/[abc]/i;//first occurance
var res3=str.match(pat3);
console.log(res3);

var pat4=/[abc]/gi;
var res4=str.match(pat4);
console.log(res4);

var pat5=/[abc]/g;
var res5=str.match(pat5);
console.log(res5);

var pat6=/[A-z]/g;
var res6=str.match(pat6);//gives null if not there
console.log(res6);

var pat7=/[^A-z]/g;//not A-z
var res7=str.match(pat7);
console.log(res7);

var pat8=/[^A-Z]/g;//not A-Z
var res8=str.match(pat8);
console.log(res8);

var pat9=/[0-9]/g;
var res9=str.match(pat9);
console.log(res9);

var pat10=/(d|b)/g;//either true or false if i given first occurance only
var res10=str.match(pat10);
console.log(res10);

var pat11=/b..n/g;
var res11=str.match(pat11);
console.log(res11);

var pat12=/\w/g;//cobination of all except spaces(A-Z a-z 0-9 _)
var res12=str.match(pat12);
console.log(res12);

var pat12=/\W/g;//reverse of small w
var res12=str.match(pat12);
console.log(res12);

var pat12=/\d/g;
var res12=str.match(pat12);
console.log(res12);

var pat12=/\d{2}/g;
var res12=str.match(pat12);
console.log("here"+res12);

var pat12=/\D/g;
var res12=str.match(pat12);
console.log(res12);

var pat12=/\s/g;// get only places ans S for not spaces
var res12=str.match(pat12);
console.log(res12);

var pat12=/\bas/g;//begining of the word
var res12=str.search(pat12);
console.log(res12);

var pat12=/bgg\b/g;//B is reverse
var res12=str.search(pat12);
console.log(res12);

var pat12=/\0/g;//check for null char
var res12=pat12.test(str);
console.log(res12);

var pat12=/\n/g;//we also have tab space \t
var res12=pat12.test(str);
console.log(res12);

var pat12=/\u0032/g;//unicode and we can give octats as well
var res12=str.match(pat12);
console.log(res12);



console.log("Let us see Quantifiers");
var newOne="Jahnavi";
var pt1=/d+/;//atleast one time to be exist
var rs1=newOne.search(pt1);
console.log(rs1);

var newtwo="_is Jahnavi si is  "
var pt2=/is*/g;//o or more occurances
var rs2=newtwo.match(pt2);
console.log(rs2);

var pt1=/is?/g;//0 or 1 occurance
var rs1=newtwo.match(pt1);
console.log(rs1);

var new3="0,1,10,,100,1000,10000";
var pt4=/10+/g;
var rs4=new3.match(pt4);
console.log(rs4)

var pt4=/10*/g;
var rs4=new3.match(pt4);
console.log(rs4)

var pt4=/10?/g;
var rs4=new3.match(pt4);
console.log(rs4)


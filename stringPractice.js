var str="Jahnavi   ";
console.log("Length of a string "+str.length);
console.log("length of string spaces removed here "+str.trimEnd().length);//trimStart and trim(for start and end as well) is also there
console.log("substring is "+str.substring(3,8));
console.log("substring is "+str.substring(5,1));
console.log("raplacing a char "+str.replace("J","j"));//if not work you have to store in a new string
var str1=str.replaceAll('a','A');
console.log(str,str1);

var str2="Sanaboina Jahnavi";
var str3=str2.slice(0,4);
console.log(str3);
console.log(str2.slice(3));
console.log(str2.slice(-4));
console.log(str2.slice(-4,-2));

var conString=str.concat("           "+str2);
console.log(conString);
console.log("character at 3 is "+str2.charAt(3));
console.log("charactercode at a is "+str2.charCodeAt(3));

var str4="DurgaPrasad";
console.log("slice : "+str4.slice(1,1));
console.log("substring : "+str4.substring(1,1));
console.log("slice : "+str4.slice(4,1));
console.log("substring : "+str4.substring(4,1));


const alphabets=new Set(['a','b','c','d']);
console.log(alphabets);
console.log(alphabets.size);
alphabets.add('j');
alphabets.add('k');
alphabets.add('l');
console.log(alphabets);
// alphabets.forEach(value=>value);
// console.log(alphabets);
alphabets.forEach(function (value){
    console.log(value);
});
console.log(typeof alphabets);
console.log(alphabets.keys());
console.log(alphabets.values());
console.log(alphabets.entries());
console.log(alphabets instanceof Set);

let ar=[1,2,3,4,5,6];
let res=new Set(ar);
console.log(res);
let res1=[...new Set(ar)];
console.log(res1);

//Map object
const maps=new Map();
console.log(maps);
console.log(maps instanceof Map);
console.log(typeof maps);
console.log(maps.size);
maps.set("1","j");
maps.set(2,'k');
maps.set(3,'l');
console.log(maps);
console.log(maps.size);
console.log(maps.get("1"));
console.log(maps.get(1));
maps.delete(3);
console.log(maps);
console.log(maps.has("1"));//check for keys only

//filters
let ar2=["J","K","L","A"];
let res4=ar2.filter((value)=>value.charCodeAt()>"J".charCodeAt()
    // return typeof value==='string' && value.toUpperCase>'K';
);
console.log(res4);

//reduce
let res5=ar2.reduce((prev,cur)=>prev+" "+cur);
console.log(res5);

//map method
let res6=ar2.map((value)=>{
    const next=value.charCodeAt()+1;
    const codeChar=String.fromCharCode(next);
    return codeChar;
});
console.log(res6);
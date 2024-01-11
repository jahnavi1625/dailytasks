const obj={
    id:123,
    name:"janu",
    age:22,
}
console.log(obj);
obj.id=1239;
console.log(obj);
// Object.defineProperty(obj,'id',{writable:false,});
// obj.id=2516;
// console.log(obj);
// Object.defineProperties(obj,{'id':{writable:false,},'name':{writable:false}});
// obj.name="dp";
// console.log(obj);
Object.defineProperty(this,'age',{value:age,writable:false});
obj.age=23;
console.log(obj);
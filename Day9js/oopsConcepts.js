// const obj={
//     id:123,
//     name:"janu",
//     age:22,
// }
// console.log(obj);
// obj.id=1239;
// console.log(obj);
// Object.defineProperty(obj,'id',{writable:false,});
// obj.id=2516;
// console.log(obj);
// Object.defineProperties(obj,{'id':{writable:false,},'name':{writable:false}});
// obj.name="dp";
// console.log(obj);
// Object.defineProperty(this,'age',{value:age,writable:false});
// obj.age=23;
// console.log(obj);

//static method
class Employee{
    normalMeth(){
        console.log("normal method");
    }
    static staticMethod(){
        // this.normalMeth();we cant use this in static 
          console.log("static method");
    }
}
const obj1=new Employee();
// obj1.staticMethod();cant call like this for static methods
Employee.staticMethod();
obj1.normalMeth();

//inheritence
class A{
    constructor(){
        console.log("constructor");
    }
    method(){
        console.log("method of A");
    }
}
class B extends A{
    constuctor(){
        Super();
        console.log("B constructor");
    }
    method(){
        super.method();
        console.log("method of B");
    }
}
const obj2=new B();
// console.log(obj2);
obj2.method();

//polymorphism
class polyMor{
    method(){
        console.log("no parameter");
    }
    method(a){
        console.log("with no param");
    }
    method(a,b){
        console.log("with two parameters");
    }
}
const obj3=new polyMor();
obj3.method();//cants work overloading always takes the layest one

//setters and getters
class getSet{
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
}
const obj4=new getSet();
obj4.setName("janu");
obj4.getName();
console.log(obj4);
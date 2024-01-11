class Employee{
    constructor(name,designation,age,exp,salary){
            this.name=name;
            this.designation=designation;
            this.age=age;
            this.exp=exp;
            this.salary=salary;
    }
    hike(){
        if(this.exp>=1){
            this.salary+=0.2*this.salary;
        }
        else{

        }
    }
}
const empObj=new Employee("janu","s/w developer",22,0,10000);
console.log(empObj);
const empObj1=new Employee("dp","s/w developer",23,1,10000);
console.log(empObj1);
empObj.hike();
console.log(empObj);
empObj1.hike();
console.log(empObj1);


class Person{
    constructor(name,phon,age,fname,gender){
            this.name=name;
            this.phon=phon;
            this.age=age;
            this.fname=fname;
            this.gender=gender;
    }
    gen(){
        if(this.gender=="M"){
            this.gender="F";
        }
        else{
             this.gender="M";
        }
    }
}
const perObj=new Person("janu",8758906578,22,"venkatakrishna","M");
console.log(perObj);
const perObj1=new Person("dp",6578377588,23,"Pothuraju","F");
console.log(perObj1);
perObj.gen();
console.log(perObj);
perObj1.gen();
console.log(perObj1);

class Car{
    constructor(name,tires,color,seat,price){
            this.name=name;
            this.tires=tires;
            this.color=color;
            this.seat=seat;
            this.price=price;
    }
    hike(){
        if(this.price>=200000){
            this.price+=0.1*this.price;
        }
        else{

        }
    }
}
const carObj=new Car("Dzire",4,"white",8,100000);
console.log(empObj);
const carObj1=new Car("dp",4,"pink",5,500000);
console.log(carObj1);
carObj.hike();
console.log(carObj);
carObj1.hike();
console.log(carObj1);
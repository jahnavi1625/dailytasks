for(let i=1;i<=10;i++)
        {
            console.log(i);
        }
        console.log('All Even Numbers From 1 to 100');
for(var i=1;i<=100;i++)
{
    
    if(i%2==0){
        
        console.log(i);
    }
}
console.log('All characters in a string');
var name="jahnavi";
for(let i=0;i<name.length;i++)
{
    console.log(name[i])
}

var sum=0;
for(var i=1;i<=10;i++)
{
    sum+=i;
}
console.log("Sum of first 10 numbers "+ sum);

var square=1;
for(var i=1;i<=10;i++)
{
    console.log("square of "+i +" = " + i*i);
}


function checkLeapYear(year) {

    if ((year % 4==0) && (year % 100!=0) || ( year % 400==0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

checkLeapYear(2024);

function area(b,h){
   return triArea=1/2*b*h;
}
console.log("area of traingle having base:3 and height:2  is "+area(3,2));
console.log("area of traingle having base:7 and height:4  is "+area(7,4));
console.log("area of traingle having base:10 and height:10  is "+area(10,10));

function addition(a,b)
{
    return a+b;
}
console.log("addition of 3 and 2 is "+ addition(3,2));
console.log("addition of -3 and -6 is "+ addition(-3,-6));
console.log("addition of 7 and 3 is "+ addition(7,3))
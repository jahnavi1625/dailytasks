let x=50;
export default x;
// let y=80;
// export default y;

try{
    x;
}catch{
    console.log("can't do divide by zero");
}

try{
    let x=1/0;
    janu;
    console.log(x);
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log("always executed")
}


try{
    i=10;
    if(i==10){
        throw new SyntaxError("please check") 
    }
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}


let numb=21;
let isPrime = true;


    for (let i = 2; i < numb; i++) {
        if (numb % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(numb+ ` is a prime number`);
    } else {
        console.log(numb +` is a not prime number`);
}
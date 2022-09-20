// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

// check the number is prime
// let num = prompt();
// let isPrime = true;
// for (let i = 2; i < num ; i++){
//     if (num%i === 0) {
//         console.log("It's not a prime number!");
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime == true) console.log("It's a prime number")


let primeArr = [ 2, ];
let xPrime = 10001
let numArr = 1;
for (let num = 3; numArr <= xPrime; num++){
    let isPrime = true;
    // check the number is prime
    for (let i = 2; i < num ; i++){
        if (num%i === 0) {
            //console.log("It's not a prime number!");
            isPrime = false;
            break;
        }
    }
    if (isPrime == true) {
        //console.log("It's a prime number")
        primeArr[numArr] = num;
        numArr++;
    }
    num++;
}
console.log("10001st prime number is: "+ primeArr[10000]);
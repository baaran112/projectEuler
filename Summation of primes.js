
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


let primeArr = [ 2, ];
let xPrime = 2000000;
let numArr = 1;
let sum = 0;
for (let num = 3; num <= xPrime; num++){
    let isPrime = true;
    // check the number is prime
    for (let i = 2; i < num ; i++){
        if (num%i === 0) {
            //It's not a prime number
            isPrime = false;
            break;
        }
    }
    if (isPrime == true) {
        //It's a prime number
        primeArr[numArr] = num;
        numArr++;
    }
    if (primeArr[numArr] >= 2000001) break;
    num++;
    
}
for (let i = 0; i<primeArr.length; i++){
    sum += primeArr[i];
}
console.log("10001st prime number is: "+ primeArr[10000]);
console.log(sum)

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let num = 600851475143 ;
let result;
for (let i = 2; i <= num ; i++) {
    if (num % i === 0 ) {
        num = num / i;
        result = i;
    }
}
console.log(result);

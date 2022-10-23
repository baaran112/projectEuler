// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

let result;
let arr = [];
let arr2 = []
let n;
for (let z = 2 ; z < 1000000 ; z++){
    n = z;
    for (let i = 0 , x = 2; n > 1 ; i++, x++){
        n % 2 === 0 ? n = n/2 : n = 3*n + 1;
        result = x;
    }
arr.push(z + ":" + result);
arr2.push(result);
}
const max = arr2.reduce((a, b) => Math.max(a, b), -Infinity);
const found = arr2.indexOf(arr2.find(element => element === max));
console.log(arr[found]);
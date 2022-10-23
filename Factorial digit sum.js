// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

function main(n) {
    let factCounter = 1n;
    for (let i = n; i > 0n; --i) {
      factCounter *= i;
    }
    let numArr = factCounter.toString().split('');
    let sum = 0;
    numArr.forEach((el) => (sum += +el));
    console.log(sum);
  }
  main(100n);
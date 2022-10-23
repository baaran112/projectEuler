// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?

a = BigInt(2 ** 1000).toString();
let result = 0;
for (let i = 0 ; i < a.length ; i++) {
    result += Number(a[i]);
}
console.log(result) // 1366
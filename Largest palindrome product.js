// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

let arr = [];
// array 900-999 // multiply array // each element * (900-999)
for (let i = 900, x = 0, z=900; i <= 999; i++, x++){
    arr[x] = i*z;
    if (i === 999) {
        z++;
        i = 900;
    }else if (z === 1000) break;
}

// search for biggest palindromic number (from two 3 digit numbers) - from last index (from the biggest to lowest)
let search = "";
for (let i = arr.length-1; i > 0; i--){
    search = arr[i].toString().split("");
    if(search[0] === search[5]){
        if(search[1] === search[4]){
            if(search[2] === search[3]){
                console.log("Biggest palindromic number made from the product of two 3-digit numbers: " + search.join(""));
                break;
            }
        }
    }
}

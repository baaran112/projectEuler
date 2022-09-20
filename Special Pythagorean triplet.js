// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let a = 1, b = 1;
for(a = 1; a < 1000 ; a++) {
    for(b = a+1; b< 1000; b++){
        let c = 1000 - a -b;
        if((a*a + b*b) === c*c) {
            console.log("a = " + a + " b = " + b + " c = " + c);
            var product = a * b * c; 
            break;
        }
        console.log("b: " + b);
    }
    console.log("a: "+ a);
}
console.log("Product abc = " + product);
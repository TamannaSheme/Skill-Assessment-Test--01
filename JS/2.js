// 2. Find the maximum number in a jagged array given below array of numbers ?
// var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];


var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let max = 0;

function maxNumber(ar) {
    for (let i = 0; i < ar.length; i++) {
        if (Array.isArray(ar[i])) {
            maxNumber(ar[i])
        } else {
            if (ar[i] > max) {
                max = ar[i]
            }
        }
    }
}
maxNumber(ar);
console.log(`The maximum number is ${max}`);



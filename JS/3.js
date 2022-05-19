// 3. Find the counts of duplicates in an array ?
// const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]
// [You have to use for loop to solve this array.You cannot use any es6 features]

const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]

arr.sort();

var number = null;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] != number) {
        if (count > 0) {
            console.log(number + " -> " + count);
        }
        number = arr[i];
        count = 1;
    }
    else {
        count++;
    }
}

if (count > 0) {
    console.log(number + " -> " + count);
}
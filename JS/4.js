// 4. How to find unique values from an array in sorted order ?
// const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]
// [You have to use for loop to solve this array.You cannot use any es6 features]

const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
        }
    }
    console.log(arr[i]);


}

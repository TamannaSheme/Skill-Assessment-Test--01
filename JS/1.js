// 1. Create a function that will find the factorial number of [9] using recursion.


function factorialRecursion(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    else {
        return x * factorialRecursion(x - 1);
    }
}

const num = 9;
// calling factorial() 
const result = factorialRecursion(num);
console.log(`The factorial of ${num} is ${result}`);

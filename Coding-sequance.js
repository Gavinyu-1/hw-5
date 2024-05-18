function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// console.log(printEvenNumbers(5));

function printEvenNumbers(n) {
    // let sum = 2;
    for (let i = 2; i <= n; i += 2) {
        console.log(i);  // we use console instead of sum +=.
    }
    // return sum; // we don't need sum for even number as it messess with the sequance.
}
// (printEvenNumbers(5));

function Fibonacci(n) {
    let fib = [0, 1]; // this declares a variable which has the first two Fibonacci generated sequance.
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // this allow us to caculate the next couple Fibonacci numbers.
    }
    return fib; // This allow the nth number in the Fibonacci sequance and to be used later in the code.
}

// console.log(Fibonacci(5));

function reverseString(str) {
    let reversed = ""; // this reverses the string sequnce there for reversing the word.
    for (let i = str.length - 1; i >= 0; i--) { // string.length could also be onther numbers, but will start from the letter determind by the number increased.
        reversed += str[i];
    }
    return reversed;
}

// console.log(reverseString("HCRAM OOOY")); // the output should be "MARCH YOOO"

function MOMTEST(str) {
    let reversed = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(MOMTEST("U 3< I")); // the output should be "I <3 U"
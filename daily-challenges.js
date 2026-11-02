//DAY 1: FIZZBUZZ
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//DAY 2:Reverse a string
function reverseStringBuiltIn(str) {
    return str.split("").reverse().join("");
}

function reverseStringLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseStringBuiltIn("hello")); 
console.log(reverseStringLoop("hello"));    

//DAY 3:Find the largest number
const numbers = [12, 45, 2, 89, 23, 67];

function findLargestLoop(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

function findLargestReduce(arr) {
    return arr.reduce((max, current) => (current > max ? current : max));
}

console.log("Loop result:", findLargestLoop(numbers));       
console.log("Reduce result:", findLargestReduce(numbers));   

//DAY 4:Remove duplicates
const inputArr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log("Set result:", removeDuplicatesSet(inputArr));       
console.log("Filter result:", removeDuplicatesFilter(inputArr)); 

//DAY 5:Palindrome checker
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

console.log(isPalindrome("racecar"));                     
console.log(isPalindrome("hello"));                       
console.log(isPalindrome("A man a plan a canal Panama"));    
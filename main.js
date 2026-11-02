// Exercise: Variable Practice Declare variables
let Name = "Tracey Wanjiru";
let Age = 21;
const isStudent = true;
const favColor = ["Blue", "Green"];
const today = new Date();

console.log(`My name is: ${Name}`);
console.log(`My age is: ${Age}`);
console.log(`Am I a student? ${isStudent}`);
console.log(`My favorite colors are:`, favColor);
console.log(`Today's date is: ${today.toLocaleDateString()}`);


// Data Types & Operators
const myAge = 21;
const birthYear = 2005;

// Age in days
const ageInDays = myAge * 365;

// Age in hours 
const ageInHours = ageInDays * 24;

// The year I turn 100
const yearTurning100 = birthYear + 100;

console.log(`My age in days: ${ageInDays}`);
console.log(`My age in hours: ${ageInHours}`);
console.log(`The year I will turn 100 is: ${yearTurning100}`);

// Function Declarations
function calculateArea(width,height){
    return width*height;
}
console.log(calculateArea(4,6));


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
const convertedTemp = celsiusToFahrenheit(25);
console.log(`25°C is equal to ${convertedTemp}°F`);


function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7)); 
  

function getInitials(fullName) {
    const words = fullName.split(" ");
    const firstInitial = words[0][0];
    const secondInitial = words[1][0];
    return (firstInitial + secondInitial).toUpperCase();
}
console.log(getInitials("Tracey Wanjiru")); 


function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("code"));  


//  Default Parameters
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}
console.log(calculateTip(100));

// Control Flow
for (let i = 1; i <=100; i++){
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

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

let stars = "";

for (let i = 1; i <= 5; i++) {
    stars += "*";
    console.log(stars);
}

// Arrays
const numbers = [1,2,3,4,5];
const doubled = numbers.map(n => n*2);
console.log(doubled);

const Numbers = [2,-4,6,-8,10,-12];
const negatives = Numbers.filter(n => n<=0);
console.log(negatives); 

const number = [12,24,17,21,9];
const firstNumber = number.find(n => n>10);
console.log(firstNumber);

const factors = [2, 3, 4];
const product = factors.reduce((total, num) => total * num, 1);
console.log(product);

//Objects
const studentProfile = {
    username: "tracey404",
    level: 12,
    isActive: true,
    skills: ["JavaScript", "HTML", "CSS"],
    
    getDetails: function() {
        return `${this.username} is currently at level ${this.level}.`;
    }
};

console.log(studentProfile.username); 
console.log(studentProfile["level"]); 

console.log(studentProfile.getDetails());

console.log("Keys:", Object.keys(studentProfile));
console.log("Values:", Object.values(studentProfile));
console.log("Entries:", Object.entries(studentProfile));

studentProfile.level = 13;          
studentProfile.school = "Tech High"; 
console.log("Updated Profile:", studentProfile);

//Array of Objects
const inventory = [
    { id: 1, name: "Wireless Mouse", price: 25.99, inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: 79.99, inStock: false },
    { id: 3, name: "HD Monitor", price: 150.00, inStock: true }
];


console.log("Accessing Array of Objects");
console.log(inventory[0].name);


console.log("Looping Through Inventory");
inventory.forEach(item => {
    console.log(`Product: ${item.name} | Price: $${item.price} | In Stock: ${item.inStock}`);
});


console.log("Filtered: Items In Stock ");
const availableItems = inventory.filter(item => item.inStock === true);
console.log(availableItems);


inventory.push({ id: 4, name: "USB-C Hub", price: 19.99, inStock: true });
console.log("Total items now:", inventory.length);

//JSON
const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

try {
    const posts = JSON.parse(postsJson);
    console.log("1. Parsed Array:", posts);

    const resultStringArray = posts
        .filter(post => post.published)                     
        .sort((a, b) => b.likes - a.likes)                   
        .map(post => `${post.title} (${post.likes} likes)`); 

    console.log("2-4. Processed Result:", resultStringArray);

    const finalJsonText = JSON.stringify(resultStringArray, null, 2);
    console.log("5. Final JSON String:\n", finalJsonText);

} catch (error) {
    console.error("Failed to parse JSON:", error.message);
}
# Week 04: Javascript Fundamentals

## Author

- **Name:** Tracey wanjiru
- **GitHub:** [@traceywanjiru](https://github.com/traceywanjiru)
- **Date:** November 2, 2026

## Project Description

A comprehensive collection of JavaScript fundamental exercises and a core mini-project (Student Grade Tracker). This repository demonstrates mastery over JavaScript objects, arrays of objects, JSON data manipulation, higher-order array methods (filter, map, reduce, find), and practical algorithm design through daily coding challenges. The goal was to build robust, modular functions capable of managing complex student data, parsing external text data, and automating report card generation.

## Technologies Used

- VS Code (Development Environment)
- Node.js (for terminal execution)
- JavaScript(ES6+)

## Features

-Student Registration & Management: Add new student profiles paired with custom subject-specific grade objects.

-Dynamic Lookups & Analytics: Retrieve student records case-insensitively, compute individual student averages, and calculate class-wide subject averages.

-Performance Evaluation: Automatically identify top-performing students and filter out struggling students (overall average below 70%).

-Automated Report Cards: Generate clean, formatted report cards translating numerical scores into standard letter grades (A–F).

-JSON Data Processing: Parse, filter, sort, and re-stringify JSON strings representing application posts and data safely with `try/catch` error handling.

-Daily Coding Challenges: Complete implementations for FizzBuzz, string reversal, largest number calculation, duplicate removal with `Set and filter`, and case/space-insensitive palindrome checking.

## How to Run

1. Clone this repository to your local machine.

2. Open the project folder in VS Code.

3. Open your terminal and run individual script files using Node.js:

```Bash
node grade-tracker.js
```

## Lessons Learned

1. Deepened understanding of built-in JavaScript object methods such as `Object.keys(), Object.values()`, and `Object.entries()` for iterating and extracting data.

2. Gained fluency in chaining higher-order array methods `(.filter(), .map(), .reduce(), .find())` to write declarative and concise data transformation pipelines.

3. Learned how data travels in web development by converting complex objects and arrays into text strings using `JSON.stringify()` and parsing them back using `JSON.parse()`.

## Challenges Faced

### Floating-Point Precision in Averages:

Problem: Calculating averages often produced long, repeating decimals (`e.g., 91.66666666666667`), which compromised readability on report cards.

Solution: Utilized `.toFixed(2)` combined with `Number(...)` to format numerical outputs cleanly to two decimal places.

### Case Sensitivity in Record Lookups:

Problem: Strict string comparisons caused student searches to fail if the user's casing didn't match stored records (e.g., searching `"alice"` vs `"Alice"`).

Solution: Normalized both search queries and database keys using `.toLowerCase()` inside helper methods to ensure robust, flexible lookups.

### Handling Missing Subject Data:

Problem: Computing class averages for specific subjects risked returning inaccurate math or throwing errors if certain students weren't enrolled in or assigned that subject.

Solution: Implemented explicit property checks `(if (student.grades[subject] !== undefined))` inside loops to ensure only valid, existing records contributed to calculations.

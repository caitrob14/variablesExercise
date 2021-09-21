//STRING METHODS
//Basic Methods
/*Syntac for basic string methods
string.methodName()
*/

//Trim (Removes empty/white space from the start and end of content string)
console.log(" Hello ".trim())
let variableTrim1 = "     Goodbye    ";
let variableTrim2 = "     See ya later    ";
// To display multiple values in a single console log a comma , can be used to separate the values.
console.log(variableTrim1, variableTrim2);
console.log(variableTrim1.trim(), variableTrim2.trim());

// You can reassign a new value to a variable using a method
let one = "     One";
console.log(one);
one = one.trim();
console.log(one);

// Uppercase and Lowercase (Changes the text to upper or lowercase)

let text= "These are words";
console.log(text.toUpperCase());
console.log(text.toLowerCase());

//Methods With Arguments
/*
Syntax for String Methods with Arguments


*/

// Index Of (Returns the index position)
// NOTE: indexOf will always return the first occurrence of the argument
let letters = "abcb";
console.log(letters.indexOf("b"));
// If the argument is a string of two or more characters, then the index returned will be the index where the string argument begins.
const fullName = "Caitlin Robertson";
console.log(fullName.indexOf("Robertson"));

// Replace (Replace content in a string)
// The first argument is the character(s) being selected. The second argument is the character(s) that is replacing the first.
let hi = "hello";
console.log(hi.replace("h", "j"));
console.log(hi.replace("hello", "Hi there!"));

// Repeat (Repeats content in a string)
let lesson = "String Methods";
console.log(lesson.repeat(3));

// Slice (Extracts part of string)
// First number/argument is the starting index. Second number/argument is the ending index (NOTE: Goes up to the second number/index, but does NOT include it in the the slice.).
let breakTime = "Almost break time!";
console.log(breakTime.slice(0, 12));
// If a second number is NOT included, then the rest of the string will be included in the slice.
console.log(breakTime.slice(7));
// When using negative numbers it starts from the end of the string (Starting at 1 NOT 0)
console.log(breakTime.slice(-5, -1));
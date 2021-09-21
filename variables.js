//VARIABLES (FOR STORING VALUES)

/* 
Syntax for Variables

variableType variableName = value; 
*/

//LET  is the variable type
//mcuMovies is the variable name
//25 is the value
//NOTE: In JavaScript; whne there is a single equal sign = the value to the right of the equal sign is being set to wha tis on the left. When you create a variable its called Decalring a variable.
let mcuMovies = 25;
//The number 25 displays in the terminal when the file is run because 25 is the value that was set to the mcuMovies variable.
console.log(mcuMovies);

//reassigning a new number value to the variable
//(NOTE when updating/reassigning a new value for a variable, the varaible type should not be used)
//mcuMovies = 27;

//Using/referencing the current value of the variable to reassign a new number value to the variable
//mcuMovies = mcuMovies + 2;
//mcuMovies = mcuMovies -2;

//Shorthand way to use/reference the current value of the variable to reassign a new number value to the variable (same as examples above)
//mcuMovies += 2;
//mcuMovies -= 2;

//Incrementing (adding one) using ++ 
//Decrementing (subtracting one) using --
//NOTE: This will reassign the new incremented or decremented value as the new value for the variable
//mcuMovies++;
//mcuMovies--;

//reassigning a different data/primitive value type as the new value for the variable.
//mcuMovies = "All MCU Movies"; 
//mucMovies = true;

//console.log(mcuMovies);

let avengersMovies = 4;
console.log(avengersMovies);
let nonAvengersMovies = mcuMovies - avengersMovies;
console.log(nonAvengersMovies);

//OTHER TYPES OF VARIABLES
//Const (used for variables with a value that will not change)
const mcuPhases = 4;
//Cannot reassign the value of the const variable
//mcuPhases = 3;
console.log(mcuPhases);

//Var (The OG Variable.)
//NOTE: The var variable type is much less restrictive than let or const. A new value can be reassigned. Also, the variable can be re-declared (AKA using the var variable type as well as setting a new value)
var theRealOG = 1997;
theRealOG = "Reassigning";
var theRealOG = "Re-declaring";
console.log(theRealOG);

//STRING VARIABLE
const firstName = "Caitlin"
const lastName = "Robertson"

//Concatenating string variables
const fullName = firstName + " " + lastName;
//const fullName = "Caitlin" + " " + "Robertson";
console.log(fullName);

//Using the length property with string variables
console.log(fullName.length);
console.log("Caitlin Robertson".length);

//Using index with String Variables
console.log(fullName[9]);
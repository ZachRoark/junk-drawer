const array1 = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]
const array2 = []

for (let i=0; i < array1.length; i++) {
    const item = array1[i];
    if (typeof item === "string") {
    array2.push(item)
    }
}

console.log(array2);



// Loop over every item in this array:

// if typeof element is a string, then push it into array2
// Return a new array that contains only strings. Log out the result.

// // Hint: The typeof operator
// console.log(typeof 42);
// // expected output: "number"

// console.log(typeof 'blubber');
// // expected output: "string"

// console.log(typeof true);
// // expected output: "boolean"

// console.log(typeof undeclaredVariable);
// // expected output: "undefined";

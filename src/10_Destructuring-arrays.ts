/*
    ES6 destructuring 
    
    1. destructuring arrays
    2. destructuring objects

*/

// destructuring array elements
// assigning the variables based on array elements

let person = ['john', 'doe', 23];

let [firstname, lastname, age] = person;

console.log(firstname);
console.log(lastname);
console.log(age);

// selective assignment 
let [johns_firstname] = person;
console.log(johns_firstname);
let [, , johns_age] = person;
console.log(johns_age);

// even rest operator can be used 
let [name, ...johns_details] = person;
console.log(name);
console.log(johns_details);


// even default values can be assigned
let employee = ['david', 'williams'];
let [david_name, david_lastname, age = 65] = employee;
console.log(david_name);
console.log(david_lastname);
console.log(age);


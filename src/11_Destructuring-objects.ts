/*
    Destructuring the objects
    
    object attribute vales can be destructured to varibles
    
    similar to array destructuring
*/

// destructuring object elements
// assigning the variables based on object attribute names

let person = {
    firstname: 'john',
    lastname: 'doe',
    age: 23
};

// now use '{}' brackets for destructuring
let {firstname, lastname, age} = person;

console.log(firstname);
console.log(lastname);
console.log(age);

// we can also assign alias when destructuring using ':'
// but once alias is used we can only use alias and not the original attribute variable names

let employee = {
    firstname: 'David',
    lastname: 'williams',
    age: 43
};

let {firstname:f, lastname:l, age:a} = employee;
console.log(f);
console.log(l);
console.log(a);

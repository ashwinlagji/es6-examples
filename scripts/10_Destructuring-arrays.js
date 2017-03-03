/*
    ES6 destructuring
    
    1. destructuring arrays
    2. destructuring objects

*/
// destructuring array elements
// assigning the variables based on array elements
var person = ['john', 'doe', 23];
var firstname = person[0], lastname = person[1], age = person[2];
console.log(firstname);
console.log(lastname);
console.log(age);
// selective assignment 
var johns_firstname = person[0];
console.log(johns_firstname);
var johns_age = person[2];
console.log(johns_age);
// even rest operator can be used 
var name = person[0], johns_details = person.slice(1);
console.log(name);
console.log(johns_details);
// even default values can be assigned
var employee = ['david', 'williams'];
var david_name = employee[0], david_lastname = employee[1], _a = employee[2], age = _a === void 0 ? 65 : _a;
console.log(david_name);
console.log(david_lastname);
console.log(age);
//# sourceMappingURL=10_Destructuring-arrays.js.map
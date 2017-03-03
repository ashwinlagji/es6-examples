/*
    Destructuring the objects
    
    object attribute vales can be destructured to varibles
    
    similar to array destructuring
*/
// destructuring object elements
// assigning the variables based on object attribute names
var person = {
    firstname: 'john',
    lastname: 'doe',
    age: 23
};
// now use '{}' brackets for destructuring
var firstname = person.firstname, lastname = person.lastname, age = person.age;
console.log(firstname);
console.log(lastname);
console.log(age);
// we can also assign alias when destructuring using ':'
// but once alias is used we can only use alias and not the original attribute variable names
var employee = {
    firstname: 'David',
    lastname: 'williams',
    age: 43
};
var f = employee.firstname, l = employee.lastname, a = employee.age;
console.log(f);
console.log(l);
console.log(a);
//# sourceMappingURL=11_Destructuring-objects.js.map
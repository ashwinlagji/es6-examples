/*
    ES6 string templating feture
    1. ${}
    2. '' and ""
    3. multiline strings

*/

// pure javascript

let person = "John";

// javascript + operator to concatinate strings
let helloMessage = "hello " + person + " to ES6";

console.log(helloMessage);


// Using ES6 string template
// use of '`' (backtick) for defining string
// we can use '${}' for substituting the varables inside string template

helloMessage = `hello ${person} to ES6`;
console.log(helloMessage);

// Even we dont have to worry about the single quotes '' or double quotes ""
helloMessage = `hello ${person} to ES6. String template supports single quotes '' & double quotes "" ...cool right`;
console.log(helloMessage);

// Also it supports multiline strings :)
// but remember to take care about whiteapces.
// white spaces are significant while specifying multiline strings
helloMessage = `hello ${person} to ES6.
            String template supports single quotes '' & double quotes "" ...
cool right`;
console.log(helloMessage);

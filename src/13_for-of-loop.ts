/*
    ES6 for..of loop
    
    syntax
    for (variable of iterable) {
        statements
    }

*/

// for of can be used while itering over an iterables

let colors = ['red','blue','green'];

// for..in old style
for(let i in colors){
    console.log(colors[i]);
}

// Using for..of ES6
for(let color of colors){
    console.log(color);
}

// Can be used on strings 

let name = "John";
for(let character of name){
    console.log(character);
}


// cannot be used for objects 
let person = {
    name: "david",
    lastnaem: "williams"
}

for(let attr of person){
    console.log(attr);
}
// error
// Type '{ name: string; lastnaem: string; }' is not an array type or a string type
// so for..of can be used only for arrays and strings
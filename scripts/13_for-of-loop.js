/*
    ES6 for..of loop
    
    syntax
    for (variable of iterable) {
        statements
    }

*/
// for of can be used while itering over an iterables
var colors = ['red', 'blue', 'green'];
// for..in old style
for (var i_1 in colors) {
    console.log(colors[i_1]);
}
// Using for..of ES6
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
// Can be used on strings 
var name = "John";
for (var _a = 0, name_1 = name; _a < name_1.length; _a++) {
    var character = name_1[_a];
    console.log(character);
}
// cannot be used for objects 
var person = {
    name: "david",
    lastnaem: "williams"
};
for (var _b = 0, person_1 = person; _b < person_1.length; _b++) {
    var attr = person_1[_b];
    console.log(attr);
}
// error
// Type '{ name: string; lastnaem: string; }' is not an array type or a string type
// so for..of can be used only for arrays and strings 
//# sourceMappingURL=13_for-of-loop.js.map
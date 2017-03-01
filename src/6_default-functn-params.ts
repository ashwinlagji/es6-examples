/*
        ES6 allows the user to set default function parameters value
        

*/

//  function without default parameters
let getValue = (value) => {
    console.log(value);
}
getValue(); // Output: undefined
getValue(20); // Output: 20

//  Now lets try with default parameters
getValue = (value = 100) => {
    console.log(value);
}
getValue(); // Output: 100
getValue(20); // Output: 20


//  function with multiple parameters
getValue = (value1 = 100, value2 = 200, value3 = value1-50) => {
    console.log(value1 + value2 + value3);
}
getValue(); // Output: 350
getValue(20); // Output: 190
getValue(20, 30); // Output: 20
getValue(20, 30, 40); // Output: 90
getValue(undefined, undefined, 55); // Output: 355


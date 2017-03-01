/*
        ES6 allows the user to set default function parameters value
        

*/
//  function without default parameters
var getValue = function (value) {
    console.log(value);
};
getValue(); // Output: undefined
getValue(20); // Output: 20
//  Now lets try with default parameters
getValue = function (value) {
    if (value === void 0) { value = 100; }
    console.log(value);
};
getValue(); // Output: 100
getValue(20); // Output: 20
//  function with multiple parameters
getValue = function (value1, value2, value3) {
    if (value1 === void 0) { value1 = 100; }
    if (value2 === void 0) { value2 = 200; }
    if (value3 === void 0) { value3 = value1 - 50; }
    console.log(value1 + value2 + value3);
};
getValue(); // Output: 350
getValue(20); // Output: 190
getValue(20, 30); // Output: 20
getValue(20, 30, 40); // Output: 90
getValue(undefined, undefined, 55); // Output: 355
//# sourceMappingURL=6_default-functn-params.js.map
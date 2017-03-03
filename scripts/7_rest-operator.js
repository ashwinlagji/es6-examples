/*
        The ES6
        rest operator
        
        rest parameter is used for providing variable number of arguments to function
*/
//  Rest Operator
// function with message and then colors
// Normal function using arguments for displaying all arguments
var displayColors = function (message) {
    console.log(message);
    for (var i_1 in arguments) {
        console.log(arguments[i_1]);
    }
};
var message = "Displaying colors";
displayColors(message, 'red');
displayColors(message, 'red', 'blue');
displayColors(message, 'red', 'blue', 'green');
// Now function with rest operator
// '...' preceeding the function parameter
// takes all the rest parameters and converts it into array of elements
var displayColors_rest = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i_2 in colors) {
        console.log(colors[i_2]);
    }
};
message = "Displaying colors with rest operator";
displayColors_rest(message, 'red');
displayColors_rest(message, 'red', 'blue');
displayColors_rest(message, 'red', 'blue', 'green');
/*
    

*/ 
//# sourceMappingURL=7_rest-operator.js.map
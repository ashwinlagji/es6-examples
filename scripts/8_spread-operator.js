/*
    opposite of rest
    
    rest operator: takes elements and combine into array
    
    spread operator: takes array and split it into elements

*/
// consider same example as rest operators
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var message = "Displaying colors";
var listColors = ['red', 'blue', 'green'];
displayColors(message, 'red');
displayColors(message, 'red', 'blue');
displayColors.apply(void 0, [message].concat(listColors));
/*
    spread and rest operators may look same but difference is that ..
    spread used in function call and ..
    rest used in function defination

*/ 
//# sourceMappingURL=8_spread-operator.js.map
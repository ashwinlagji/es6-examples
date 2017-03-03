/*
        The ES6 
        rest operator    
        
        rest parameter is used for providing variable number of arguments to function
*/

//  Rest Operator

// function with message and then colors
// Normal function using arguments for displaying all arguments
let  displayColors = function(message) {
    console.log(message);
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

let message = "Displaying colors"
displayColors(message, 'red');
displayColors(message, 'red','blue');
displayColors(message, 'red','blue','green');


// Now function with rest operator
// '...' preceeding the function parameter
// takes all the rest parameters and converts it into array of elements
let displayColors_rest = function(message,...colors){
    console.log(message);
    for(let i in colors){
        console.log(colors[i]);
    }
} 
 message = "Displaying colors with rest operator"
displayColors_rest(message, 'red');
displayColors_rest(message, 'red','blue');
displayColors_rest(message, 'red','blue','green');


/*
    

*/
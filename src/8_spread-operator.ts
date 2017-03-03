/*
    opposite of rest 
    
    rest operator: takes elements and combine into array
    
    spread operator: takes array and split it into elements

*/


// consider same example as rest operators

let  displayColors = function(message, ...colors) {
    console.log(message);
    for(let i in colors){
        console.log(colors[i]);
    }
}

let message = "Displaying colors";
let listColors = ['red','blue','green']
displayColors(message, 'red');
displayColors(message, 'red','blue');
displayColors(message, ...listColors);

/*
    spread and rest operators may look same but difference is that ..
    spread used in function call and ..
    rest used in function defination

*/
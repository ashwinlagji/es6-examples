/*
    Explaining the problem with closures in JavaScript 
    when using var in for loop

*/

//   Using Var
for (var i = 5; i < 10; i++) {

    setTimeout(function () {
        console.log(i)
    }, 1000);
}

//   Output: (5)10 
//   output 10 x5 times


//  when using let 
for (let i = 0; i < 5; i++) {

    setTimeout(function () {
        console.log(i)
    }, 1000);
}
//desired output

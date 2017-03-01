/*
    Explaining the problem with closures in JavaScript
    when using var in for loop

*/
//   Using Var
for (var i = 5; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 1000);
};
//   Output: (5)10 
//   output 10 x5 times
//  when using let 
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
//desired output
//# sourceMappingURL=2_closures.js.map
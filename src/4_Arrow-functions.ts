/*
        Using Arrow functions
        
        using a shorter way of writing javascript functions
        
        => :fat Arrow
*/


//      ES5 Function syntax
var getNumber = function () {
    return 10;
}
console.log(getNumber());


//        In Es6 we omit the function keyword
const getNumberArrowFunctn = () => {
    return 10;
}
console.log(getNumberArrowFunctn());


//        If contains only return statement...
//        then even function brackets and return keyword can be ignored
const getNumberArrowFunctn_Short = () => 10;
console.log(getNumberArrowFunctn_Short());


//        If Contains Only one argument then even round brackets can be ignored
const getNumberArrowFunctn_veryShort = x => x * 10 / 2;
console.log(getNumberArrowFunctn_veryShort(5));


//        If Contains more than one arguments then round brackets...
//        for arguments is must
const getNumberArrowFunctn_withArgs = (x, y, z) => x * 10 / 2 + y - z;
console.log(getNumberArrowFunctn_withArgs(5, 10, 4));


//          If Function body contains multiple lines of code..
//          then curly braces and a return keyword(if required) are required
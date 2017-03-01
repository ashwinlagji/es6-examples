/*
        New const keyword to define read-only variables
        
        
*/

let normal_var ;
// const const_var;                // Does't work .. Invalid
                                // Const has to be initialized at 

//console.log(const_var);

const const_var2 = "Ashwin";    //Valid

console.log(const_var2);        //Works Fine

// const Object

const obj = {
    "name": "Ashwin"
}

//obj = {                         //error TS2540: Cannot assign to 'obj' because it is a constant or a read-only property.
//    lastname: "lagji"           //Error
//}

obj.name = "John";                 //Valid .. Properties can be changed

console.log(obj)
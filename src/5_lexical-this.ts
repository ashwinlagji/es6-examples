/*
        The lexical this when using arrow functions

*/

//  es5 js code

let person = {
    id: 123,
    sayHello: function () {
        console.log(this.id);
    }
}
person.sayHello();                   // Output :123


//  if we use a function inside the sayHello
//  the function inside sayHello creates its own context
person = {
    id: 123,
    sayHello: function () {
        setInterval(function(){
            console.log(this.id)      // Output :undefined 
        },10000);
    }
}
person.sayHello(); 


//  Problem solved by 2 methods.
//  1. By saving the context of outside function;
person = {
    id: 123,
    sayHello: function () {
        
        let self = this;
        
        setInterval(function(){
            console.log(self.id)      // Output :123 
        },10000);
    }
}
person.sayHello(); 

//  2. using arrow => functions
person = {
    id: 123,
    sayHello: function () {
        setInterval(()=>{
            console.log(this.id)      // Output :123 
        },10000);
    }
}
person.sayHello(); 
/*
    arrow function doesnot creates its own context..
    and uses its parents context (this)
*/
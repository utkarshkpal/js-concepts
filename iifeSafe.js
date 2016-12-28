


var greeting = "Hello";


(function(name) {
    var greeting = "hola";
    console.log(greeting + name);

})('Utkarsh');

console.log(greeting);


//iife doesn't interfere with other code.




var greeting = "Hello";    // to have global access in iife we pass global object


(function(global,name) {
    var greeting = "hola";
     global.greeting= "hola";
    console.log(greeting + name);

})(window,'Utkarsh');

console.log(greeting);

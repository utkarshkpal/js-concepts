 b();                                   // b called

 console.log(a);                        //undefined

 var a = 'Hello World';

 function b(){

console.log("b called");

 };


 //in hoisting the js engine allocates space to all
 // the variables and all variable in js are intialized with undefined.

 //fuunction works but good practise to define before calling

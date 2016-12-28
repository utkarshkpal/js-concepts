//iife function statement
var greetFunc =function name(name){

  return 'Hello '+name;

}('Utkarsh');

console.log(greetFunc);

//

(function (name){

  console.log('Inside IIFE : '+'Hello '+name);

}('Utkarsh'));

function foo(callback){

  callback();
  console.log('foo called');

}


foo(function(){
  console.log('callback called');
});

//in callback we call a function and by pass a function
// so when it is finished it executes that passed function.

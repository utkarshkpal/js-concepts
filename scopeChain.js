function a(){
  console.log(myVar);
}

function b() {
  var myVar = 2;
  a();
}

myVar=1;    //myVar not defined inside a so it goes up the scope chain
            //which here is global scope 
b();

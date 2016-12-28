function init () {

var arr = [];

for (var i = 0; i < 3; i++) {

   arr.push(
     (function(j){                           //iife //let j= i; could also be used.
       return function(){
        console.log(j);
      }
   })(i)
 )
}
return arr;

};

var foo = init();

console.log(foo);

foo[0]();
foo[1]();
foo[2]();

function makeGreeting(language){

   return function(fname,lname){

     if(language === 'en'){

       console.log('Hello '+fname+''+lname);
     }

     if(language === 'es'){

       console.log('Hola '+fname+''+lname);
     }

   }
}


var greetSpanish = makeGreeting('es');
var greetEnglish = makeGreeting('en');

console.log(greetSpanish);

greetSpanish('utk','kan');
greetEnglish('utk','kan');

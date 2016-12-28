
function waitThreeSeconds() {
    var ms = 3000+new Date().getTime();
    while(new Date()<ms){};


      console.log('finished function')
}

function clickhandler(){
   alert('click event');
}

document.addEventListener('click',clickhandler);

waitThreeSeconds();
console.log('finished execution');



//click funtion is run after the both console.log.
// when we click while the waitThreeSeconds funtion was running , the function
// was put on the event queue but will be executed after other function in the
//event queue.

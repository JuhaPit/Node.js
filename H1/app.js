console.log("Hello World!");

function greet(){
    console.log("Hello user!");
}

greet();

logGreeting(function(){
    
    console.log("Inline greeting!");
});

function logGreeting(fn) {
    
    fn();
}

logGreeting(greet);

var greetMe = function() {
    
    console.log("Moikka Juha");
}

greetMe();

require('./greet.js');

var greet = require('./greet');
greet();
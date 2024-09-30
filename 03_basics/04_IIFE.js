// IIFE --> Immediately Invoked Function Expression
(function connection(){                     // named iife
    console.log(`DB connected`)
})();               // semicolon is necessary to end the execution 

// in arrow format
((name)=> {                                 // arrow iife
    console.log(`DB connected ${name}`)
})('hitesh')
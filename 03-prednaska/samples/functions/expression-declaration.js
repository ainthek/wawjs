// define (declare)
function myFunction(evt) {
    // statement 1;
    // statement 2;
    // return .. 
}
// use (function call)
myFunction({});
// use (assign as handler)
btn.onclick = myFunction;



// use + define
btn.onclick = function(evt) {
    // statement 1;
    // statement 2;
    // return .. 
};

btn.onclick = (evt) => // expression
// or body with statements	
// {
//     // statement 1;
//     // statement 2;
//     // return ..	
// }


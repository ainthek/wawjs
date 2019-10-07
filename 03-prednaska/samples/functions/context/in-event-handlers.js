const stream = process.stdin;

//node.js api
stream.on("data", function(chunk) {
    //this === stream;
});

// dom events api 
display.addEventListener("focus", hf);

function hf(evt) {
    //this===evt.target;
    evt.target.rows = 30;
    evt.target.cols = 30;
}


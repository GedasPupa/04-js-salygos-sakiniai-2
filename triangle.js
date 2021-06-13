"use strict"

let a=0, b=0, c=0, longest;
let output3 = document.getElementById('output3');

function getLongest(a1, b1, c1) {
    if (a1 > b1 && a1 > c1) {
    longest = a1;
    a = 0; // for next count
    b = b1;
    c = c1;
    } else if (b1 > c1) {
        longest =  b1;
        a = a1;
        b = 0; // for next count
        c = c1; 
    } else {
        longest =  c1;
        a = a1;
        b = b1;
        c = 0; // for next count
    }
}

function checkTriangle(a1, b1, c1) {
    getLongest(a1, b1, c1);
    if (a+b+c > longest) {
       output3.innerHTML = 'Valio, trikampis įmanomas!';
    } else {
        output3.innerHTML = 'Iš įvestų krastinių trikampis neįmanomas. Bandykite dar kartą!';
    }
    console.log(a+b+c);
}

function onSubmit3() {
    event.preventDefault();
    let a1 = parseFloat(document.getElementById('input-6').value);
    let a2 = parseFloat(document.getElementById('input-7').value);
    let a3 = parseFloat(document.getElementById('input-8').value);
    checkTriangle(a1, a2, a3);    
}

// checkTriangle(10, 29, 20);
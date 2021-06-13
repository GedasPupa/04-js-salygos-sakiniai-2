"use strict"

function getBiggest(a, b, c) {
    if (a > b && a > c) {
    return a;
    } else if (b > c) {
        return b;
    } else return c;
}

function onSubmit2() {
    event.preventDefault();
    let a = parseInt(document.getElementById('input-3').value);
    let b = parseInt(document.getElementById('input-4').value);
    let c = parseInt(document.getElementById('input-5').value);
    document.getElementById('output2').value = getBiggest(a, b, c);
}
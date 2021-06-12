"use strict"

let biggerNumber;
let output = document.getElementById('output');

function getBigger(input1, input2) {
    input1 > input2 ? biggerNumber = input1 : biggerNumber = input2;
}

function onSubmit() {
    event.preventDefault();
    getBigger(document.getElementById('input-1').value, document.getElementById('input-2').value);
    output.value = biggerNumber;
}
// THIS IS WHERE
// We import the math utils
import { addTwoNumbers, difTwoNumbers, multTwoNumbers, divTwoNumbers} from './MathUtils.js';
//and export the click handlers that CALL the math Utils 


//ADDING (each handling function needs to be exported to app.js, where they will)
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumSpan = document.getElementById('sum-span');

export function handleSumClick() {
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;
 
    const sum = addTwoNumbers(value1, value2);

    sumSpan.textContent = sum;
}

//SUBTRACTING
const difInput1 = document.getElementById('dif-input-1');
const difInput2 = document.getElementById('dif-input-2');
const difSpan = document.getElementById('dif-span');

export function handleDifClick() {
    const value1 = difInput1.valueAsNumber;
    const value2 = difInput2.valueAsNumber;
 
    const dif = difTwoNumbers(value1, value2);

    difSpan.textContent = dif;
}
//MULTIPLYING
const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multSpan = document.getElementById('mult-span');

export function handleMultClick() {
    const value1 = multInput1.valueAsNumber;
    const value2 = multInput2.valueAsNumber;

    const mult = multTwoNumbers(value1, value2);

    multSpan.textContent = mult;
}
//DIVIDING
const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divSpan = document.getElementById('div-span');

export function handleDivClick() {
    const value1 = divInput1.valueAsNumber;
    const value2 = divInput2.valueAsNumber;

    const div = divTwoNumbers(value1, value2);

    divSpan.textContent = div;
}
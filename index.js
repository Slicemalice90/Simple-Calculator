
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// let num1 = 8
// let num2 = 2

// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let sumEl = document.getElementById("sum-el")

// function add() {
//     sumEl.textContent = num1 + num2
// }

// function subtract() {
//     sumEl.textContent = num1 - num2
// }

// function divide() {
//     sumEl.textContent = num1 / num2
// }

// function multiply() {
//     sumEl.textContent = num1 * num2
// }




// let input1 = 0;
// let input2 = 0;

// function getDataFromInput1() {
//     input1 = document.getElementById("input1").value
//     console.log(input1)
// }

// function getDataFromInput2() {
//     input2 = document.getElementById("input2").value
//     console.log(input2)
// }

// sumEl = document.getElementById("sum-el")

// function add() {
//     sumEl.textContent = Number(input1) + Number(input2) 
// }
    
// function subtract() {
//     sumEl.textContent = Number(input1) - Number(input2)
// }

// function divide() {
//     sumEl.textContent = Number(input1) / Number(input2) 
// }

// function multiply() {
//     sumEl.textContent = Number(input1) * Number(input2)
// }


// let input1 = 0;
// let input2 = 0;

// function getDataFromInput1() {
//     input1 = document.getElementById("input1").value
// }

// function getDataFromInput2() {
//     input2 = document.getElementById("input2").value
// }

// let sumEl = document.getElementById("sum-el")

// function add() {
//     sumEl.textContent = Number(input1) + Number(input2)
// }

// function subtract() {
//     sumEl.textContent = Number(input1) - Number(input2)
// }

// function divide() {
//     sumEl.textContent = Number(input1) / Number(input2)
// }

// function multiply() {
//     sumEl.textContent = Number(input1) * Number(input2)
// }




let input1 = 0
let input2 = 0

function getDataFromInput1() {
    input1 = document.getElementById("input1").value
}

function getDataFromInput2() {
    input2 = document.getElementById("input2").value
}

let sumEl = document.getElementById("sum-el")

function add() {
    sumEl.textContent = Number(input1) + Number(input2)
}

function subtract() {
    sumEl.textContent = Number(input1) - Number(input2)
}

function divide() {
    sumEl.textContent = Number(input1) / Number(input2)
}

function multiply() {
    sumEl.textContent = Number(input1) * Number(input2)
}

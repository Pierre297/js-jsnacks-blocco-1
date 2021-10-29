

// const inputOne = parseInt(prompt("Scrivi un numero."));
// const inputTwo = parseInt(prompt("Scrivi un numero."));
// const inputThree = parseInt(prompt("Scrivi un numero."));
// const inputFor = parseInt(prompt("Scrivi un numero."));
// const inputFive = parseInt(prompt("Scrivi un numero."));
// const inputSix = parseInt(prompt("Scrivi un numero."));
// const inputSeven = parseInt(prompt("Scrivi un numero."));
// const inputEight = parseInt(prompt("Scrivi un numero."));
// const inputNine = parseInt(prompt("Scrivi un numero."));
// const inputTen = parseInt(prompt("Scrivi un numero."));


// valNum = inputOne + inputTwo + inputThree + inputFor +inputFive + inputSix + inputSeven + inputEight + inputNine + inputTen;
// console.log(valNum);

// DA RIVEDERE!!

const contain = document.getElementById("container");

let sum = 0;
for(i = 0; i < 10; i++){
    const askNumbers = parseInt(prompt("Scrivi il tuo numero"));
    sum += askNumbers[i];
}

console.log(sum);


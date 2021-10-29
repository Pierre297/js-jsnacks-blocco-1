// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.


// crea un array e dichiara lo spazio all'interno di esso.
// const spaceArray = 50;

// const randomArray = [];

// let found = false;

// let numbers = Math.floor(Math.random() * 1000) +1;

// // fai scegliere numeri random in un ciclo for
// for(let i = 0; i < spaceArray; i++ ){
//     // fai in modo che non vengano estratti doppioni
//     if (numbers[i] == spaceArray) {
//         found = true;
//     }
// };

// if (!found)  {
//  let numList = document.createElement('div');
//  numList.innerText = numbers;
//  document.querySelector('.numbers').append(numList);
// }

const numberList = [];

while (numberList.length < 50) {
    const num = Math.floor(Math.random() * 100) + 1;

    let duplicateNum = false;

    for (i = 0; i < numberList.length; i ++) {
        if(num === numberList[i]){
            duplicateNum = true;
        }
    }
    if (duplicateNum == false){
        numberList.push(num);
    }
}

console.log(numberList);
console.log("la lista di numeri casuali senza duplicati è: " + numberList);
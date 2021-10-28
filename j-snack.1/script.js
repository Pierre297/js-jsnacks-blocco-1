// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// spazio per inserire due numeri
const numberOne = parseInt(prompt("scegli un numero."));

const numberTwo = parseInt(prompt("scegli un secondo numer"));

// fai in modo che il sistema selezioni il numero più grande.
if(numberOne > numberTwo){
    console.log(numberOne);
}else {
    console.log(numberTwo);
}

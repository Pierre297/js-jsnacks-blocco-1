// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// array vuoto
const numberArr = [];

// chiedi per 6 volte un numero
for(let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Scrivi un numero."));

// definisci se il numero è dispari o meno (se si inseriscilo nell'Array)
    if(num % 2 !== 0){
        numberArr.push(num);
    }
}

console.log(numberArr);


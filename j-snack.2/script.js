// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// fai inserire due parole
const wordOne = prompt("Scrivi una parola.")

const wordTwo = prompt("Scrivi una seconda parola.")

// fai determinare al sistema la parola più lunga 
if(wordOne.length > wordTwo.length ) {
    console.log(wordOne);
    console.log(wordTwo);
}else {
    console.log(wordTwo);
    console.log(wordOne);
}

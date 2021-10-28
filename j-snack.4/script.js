// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Chiedi all’invitato il suo nome.
// let userName = document.getElementById("inputId");
const userName = prompt("Qual è il tuo nome?");
const guessList = document.getElementById("guess-list");

// lista invitati
const inviteList = ["Nick Carraway", "Jay Gatsby", "Daisy Buchanan", "Tom Buchanan", "Jordan Baker", "Myrtle Wilson", "George Wilson", "Owl Eyes", "Klipspringer", "Meyer Wolfsheim"];

let guest = false;

// controlla che sia nella lista
for( let i = 0; i <= inviteList.length; i++){
    if (inviteList[i] === userName){
        guest = true;
    }

};

if(guest == true ){
    guessList.innerHTML = "Benvenuto! Il tuo invito è valido.";
} else {
    guessList.innerHTML = "Spiacenti, il tuo nome non è presente nella lista.";
};


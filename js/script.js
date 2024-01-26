// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Bonus:
// effettuare dei controlli per capire se l'utente ha inserito correttamente il numero di km e l'età (ovvero se sono effettivamente dei numeri e non testo a caso)


const userDistance = prompt("Inserisci la distanza in km che vuoi percorrere");
const userAge = prompt("Inserisci la tua età");

let ticketPrice = userDistance * 0.21;

// controllo se posso effettuare lo sconto
if(userAge <= 17) {
    // se l'utente è minorenne
    ticketPrice = ticketPrice - ((ticketPrice / 100) * 20);
} else if(userAge >= 65){
    // se l'utente è over 65
    ticketPrice = ticketPrice - ((ticketPrice / 100) * 40);
}

document.getElementById("price").innerHTML = `Il prezzo del tuo biglietto è ${ticketPrice.toFixed(2)} €`;



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

// test
// const userDistance = 133;
// const userAge = 96;

let ticketPrice = userDistance * 0.21;
// console.log(ticketPrice);

// controllo età dell'utente per vedere se si possono applicare degli sconti
// if(userAge <= 17 || userAge >= 65) {
//     if(userAge <= 17) {
//         ticketPrice = ticketPrice - ((ticketPrice / 100) * 20);
//         console.log(ticketPrice);
//     } else {
//         ticketPrice = ticketPrice - ((ticketPrice / 100) * 40);
//         console.log(ticketPrice);
//     }
// }

if(userAge <= 17) {
    ticketPrice = ticketPrice - ((ticketPrice / 100) * 20);
    // document.getElementById("price").innerHTML = ticketPrice;
} else if(userAge >= 65){
    ticketPrice = ticketPrice - ((ticketPrice / 100) * 40);
    // document.getElementById("price").innerHTML = ticketPrice;
}

document.getElementById("price").innerHTML = `${ticketPrice.toFixed(2)} €`;



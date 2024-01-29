// Scrivi un programma che prende tre numeri in input usando prompt. Calcola la media di questi numeri e visualizza il risultato con almeno due decimali.

const n_1 = prompt("Inserisci il primo numero");
const n_2 = prompt("Inserisci il secondo numero");
const n_3 = prompt("Inserisci il terzo numero");

const average = (Number(n_1) + Number(n_2) + Number(n_3)) / 3;
console.log(average);

document.getElementById("numbers").innerHTML = `Hai inserito i seguenti numeri: ${n_1}, ${n_2}, ${n_3}`;
document.getElementById("average").innerHTML = `La media è ${average.toFixed(2)}`;



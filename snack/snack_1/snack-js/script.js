// Crea un programma che chiede all'utente una temperatura in gradi Celsius e la converte in Fahrenheit, tramite una ricerca su internet potrete trovare la formula corretta per effettuare la conversione. Visualizza la temperatura convertita.

const celsius = prompt("Inserisci la temperatura in gradi Celsius");
console.log(celsius);

const fahr = (celsius * 1.8) + 32;
console.log(fahr);


document.getElementById("g_celsius").innerHTML = `Hai inserito ${celsius}°`;
document.getElementById("conversion").innerHTML = `La temperatura in farh è ${fahr}`;
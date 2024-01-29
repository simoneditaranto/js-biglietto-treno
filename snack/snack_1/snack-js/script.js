// Crea un programma che chiede all'utente una temperatura in gradi Celsius e la converte in Fahrenheit, tramite una ricerca su internet potrete trovare la formula corretta per effettuare la conversione. Visualizza la temperatura convertita.

const celsius = prompt("Inserisci l temperatura in gradi Celsius");
console.log(celsius);

const fahr = (celsius * 1.8) + 32;
console.log(fahr);

if(isNaN(fahr)) {

    document.getElementById("error").innerHTML = `Non hai inserito un valore corretto, ricarica la pagina`;
    document.getElementById("error_fahr").innerHTML = `Impossibile effettuare il calcolo`;    

} else{

    document.getElementById("g_celsius").innerHTML = `${celsius}°`;
    document.getElementById("conversion").innerHTML = `${fahr}`;

}

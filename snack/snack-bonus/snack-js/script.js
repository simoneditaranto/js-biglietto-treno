// SCELTA DELL'UTENTE
const startChoice = prompt("Quale programma vuoi eseguire?");
console.log(startChoice);

if(Number(startChoice) === 1) {

    document.getElementById("second").innerHTML = "Ricarica la pagina e inserisci 2 per la media aritmetica";
    document.getElementById("third").innerHTML = "Ricarica la pagina e inserisci 3 per sasso carta forbici";
    // PRIMO
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

} else if(Number(startChoice) === 2) {
    document.getElementById("first").innerHTML = "Ricarica la pagina e inserisci 1 per la conversione";
    document.getElementById("third").innerHTML = "Ricarica la pagina e inserisci 3 per sasso carta forbici";

    // SECONDO
    const n_1 = prompt("Inserisci il primo numero");
    const n_2 = prompt("Inserisci il secondo numero");
    const n_3 = prompt("Inserisci il terzo numero");

    const average = (Number(n_1) + Number(n_2) + Number(n_3)) / 3;
    console.log(average);

    document.getElementById("numbers").innerHTML = `Hai inserito i seguenti numeri: ${n_1}, ${n_2}, ${n_3}`;

    if(!isNaN(average)) {
        document.getElementById("average").innerHTML = `La media è ${average.toFixed(2)}`;
    } else {
        document.getElementById("average").innerHTML = `La media è: impossibile calcolare la media`;
    }


} else if(Number(startChoice) === 3) {

    document.getElementById("first").innerHTML = "Ricarica la pagina e inserisci 1 per la conversione";
    document.getElementById("second").innerHTML = "Ricarica la pagina e inserisci 2 per la media aritmetica";
    // TERZO
    // per il confronto con la scelta casuale del pc utilizzo:
    // 1 - sasso
    // 2 - carta
    // 3 - forbice

    const userChoice = prompt("Sasso, carta o forbice?");
    // userChoice = "carta";
    let numberChoice = 0;


    if(userChoice == "sasso") {
        numberChoice = 1;
        console.log(numberChoice);
        document.getElementById("stone").innerHTML = `<i class="fa-solid fa-user-ninja"></i>`;

    } else if(userChoice == "carta") {
        numberChoice = 2;
        console.log(numberChoice);
        document.getElementById("paper").innerHTML = `<i class="fa-solid fa-user-ninja"></i>`;
    } else if(userChoice == "forbice"){
        numberChoice = 3;
        console.log(numberChoice);
        document.getElementById("scissors").innerHTML = `<i class="fa-solid fa-user-ninja"></i>`;
    } else {
        document.getElementById("error").innerHTML = "Il testo inserito non è valido, ricaricare la pagina!";
        console.log(userChoice);
    }

    // scelta casuale del computer
    const computerChoice = Math.floor(Math.random() * 3 + 1);
    console.log(computerChoice);

    if(computerChoice === 1) {
        document.getElementById("pc_stone").innerHTML = `<i class="fa-solid fa-user-ninja"></i>`;

    } else if(computerChoice === 2) {
        document.getElementById("pc_paper").innerHTML = `<i class="fa-solid fa-user-ninja"></i>`;
    } else if(computerChoice === 3){
        document.getElementById("pc_scissors").innerHTML = `<i class="fa-solid fa-user-ninja"></i>`;
    }

    if(numberChoice != 0) {
        // se ho inserito un testo valido

        if(numberChoice != computerChoice){
            // se la mia scelta è diversa da quella del computer

            if( (numberChoice === 1 && computerChoice === 3) || 
                (numberChoice === 2 && computerChoice === 1) ||
                (numberChoice === 3 && computerChoice === 2) ) {
        
                document.getElementById("result").innerHTML = "Hai vinto!";
                // <i class="fa-solid fa-user-ninja"></i>

            } else {
                document.getElementById("result").innerHTML = "Hai perso!";
            } 
        
        } else{
            document.getElementById("result").innerHTML = "Pareggio";
        }
    }

} else {
    document.getElementById("page").innerHTML = "Valore inserito non corretto, ricarica la pagina ed inserisci un valore tra 1 e 3 :)";
}











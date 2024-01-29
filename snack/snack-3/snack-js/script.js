// Scrivi un programma che simula il gioco di "Carta, forbice, sasso". Chiedi all'utente di fare una scelta e confrontala con una scelta casuale del computer. Determina il vincitore o se c'è un pareggio

// per il confronto con la scelta casuale del pc utilizzo:
// 1 - sasso
// 2 - carta
// 3 - forbice

const userChoice = prompt("Sasso, carta o forbice?");
let numberChoice = 0;


if(userChoice == "sasso") {
    numberChoice = 1;
    console.log(numberChoice);
} else if(userChoice == "carta") {
    numberChoice = 2;
    console.log(numberChoice);
} else if(userChoice == "forbice"){
    numberChoice = 3;
    console.log(numberChoice);
} else {
    document.getElementById("error").innerHTML = "Il testo inserito non è valido, ricaricare la pagina!";
    console.log(userChoice);
}

// scelta casuale del computer
const computerChoice = Math.floor(Math.random() * 3 + 1);
console.log(computerChoice);

if(numberChoice != 0) {
    // se ho inserito un testo valido

    if(numberChoice != computerChoice){
        // se la mia scelta è diversa da quella del computer

        if( (numberChoice === 1 && computerChoice === 3) || 
            (numberChoice === 2 && computerChoice === 1) ||
            (numberChoice === 3 && computerChoice === 2) ) {
    
            document.getElementById("result").innerHTML = "Hai vinto!";
    
        } else {
            document.getElementById("result").innerHTML = "Hai perso!";
        } 
    
    } else{
        document.getElementById("result").innerHTML = "Pareggio";
    }
}





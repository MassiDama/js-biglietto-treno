
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// chiediamo all' utente il numero di km che vuole percorrere 
const kmUser = parseInt(prompt("Dichiarare i km che si vogliono percorrere"));

// chiediamo all'utente la propria età
const ageUser = parseInt(prompt("Dichiarare la propria età"));

// prezzo del biglietto dato da 0.21€ al km
let priceTicket = 0.21 * kmUser;

console.log(priceTicket);


// condizioni per gli sconti che vanno effettuati
if (ageUser < 18) {
    priceTicket = (priceTicket - (priceTicket * 20) / 100);

    console.log( "Il prezzo scontanto per persone sotto i 18 anni: " + priceTicket + " €" ) ;
 
} else if(ageUser > 65){
    priceTicket = (priceTicket - (priceTicket * 40) / 100);

    console.log( "Il prezzo scontanto per persone sopra i 65 anni: " + priceTicket + " €" ) ;
 
} else {

    console.log( "La tua età non rientra tra i prezzi scontati: " + priceTicket + " €" ) ;
 
}

// funzione con massimo due decimali
priceTicket = priceTicket.toFixed(2)


// output del prezzo finale (con massimo due decimali)

document.getElementById("final-price").innerHTML = "Il prezzo del tuo biglietto è " + priceTicket + " €" ;
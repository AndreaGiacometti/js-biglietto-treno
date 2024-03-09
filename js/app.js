// Calcolare il prezzo del biglietto del treno:
// - il prezzo varia in base ai km e costa 0,21 euro a km
// - ai <18 anni viene applicato uno sconto del 20%, ai >65 anni uno sconto del 40%

// Chiedere il numero dei km da percorrere
const km = parseInt(prompt('inserisci il numero di km che dovrai percorrere')); //number
//console.log(km)

//chiedere l'età
const age = parseInt(prompt('inserisci la tua età')) //number
//console.log(age)

// impostare variabile prezzo al km
const pricePerKm = 0.21; //number

//calcolare il prezzo del biglietto senza sconti
const basePrice = (km * pricePerKm); //number
//console.log(basePrice)

//impostare le variabili di sconto
let discount = 0 //number

if (age < 18) {
    discount = 0.2 //number
} else if (age > 65) {
    discount = 0.4 //number
}

//calcolare il prezzo del biglietto applicando gli sconti
const price = basePrice - basePrice * discount //number

//stampare il prezzo finale riducendo il numero di cifre decimali a 2
console.log (price.toFixed(2))

// Stampare il prezzo del biglietto sulla viewport tramite collegamento a html
const priceElement = document.getElementById('price')
priceElement.innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) + '&euro;'





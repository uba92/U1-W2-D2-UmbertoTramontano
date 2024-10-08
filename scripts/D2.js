/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 */

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 30
let number2 = 50
let eldest
//condizione if/else-if/else
if (number1 > number2) {
  //questo blocco di codice verrà eseguito se number1 è maggiore di number2
  eldest = number1
  console.log('Eldest: ', eldest)
} else if (number2 > number1) {
  //questo blocco di codice verrà eseguito se number2 è maggiore di number1
  eldest = number2
  console.log('Eldest: ', eldest)
} else {
  //questo blocco di codice viene eseguito nel caso in cui number1 e number2 siano uguali
  console.log('The two values ​​are the same')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number = 5

if (number === 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let newNumber = 25

if (newNumber % 5 === 0) {
  console.log('Il numero ', newNumber, ' è divisibile per 5')
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 15
let n2 = 7

if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8 || n2 - n1 === 8) {
  console.log(
    'Uno dei due numeri è uguale a 8 oppure la loro somma o sottrazione dà 8 come risultato!'
  )
}
//cambiando il valore di n1, di n2 o di entrambi in modo che nessuno di essi sia uguale a 8
// o in modo che l'addizione/sottrazione tra essi sia diversa da 8
//il blocco di codice all'interno dell'if non verrà eseguito e sulla console non verrà stampato nulla

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shippingCosts = 10
let totalShoppingCart = 40
let checkout

if (totalShoppingCart > 50) {
  checkout = totalShoppingCart
  console.log('Totale da pagare: ', checkout)
} else {
  checkout = totalShoppingCart + shippingCosts
  console.log('Totale da pagare: ', checkout)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFridayCheckout

if (totalShoppingCart > 50) {
  blackFridayCheckout = totalShoppingCart - 0.2 * totalShoppingCart
  console.log('Totale da pagare: ', blackFridayCheckout)
} else {
  blackFridayCheckout =
    totalShoppingCart - 0.2 * totalShoppingCart + shippingCosts
  console.log('Totale da pagare: ', blackFridayCheckout)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x1 = 2
let x2 = 3
let x3 = 1

let y //utilizzo una variabile contenitore per scambiare i valori delle tre variabili

if (x1 > x2) {
  if (x2 > x3) {
    console.log(x1, x2, x3)
  } else if (x1 > x3) {
    console.log(x1, x3, x2)
  } else {
    console.log(x3, x1, x2)
  }
} else if (x1 < x2) {
  if (x2 < x3) {
    console.log(x3, x2, x1)
  } else if (x1 < x3) {
    console.log(x2, x3, x1)
  } else {
    console.log(x2, x1, x3)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = 'ciao'
if (typeof valore === 'number') {
  console.log('Il valore fornito è un numero')
} else {
  console.log('Il valore fornito non è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let anotherNumber = 50
if (anotherNumber % 2 === 0) {
  console.log(anotherNumber, ' è un numero pari')
} else {
  console.log(anotherNumber, ' è un numero dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 3
if (val < 10) {
  if (val < 5) {
    console.log('Meno di 5')
  } else {
    console.log('Meno di 10')
  }
} else {
  console.log('Uguale a 10 o maggiore')
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(me)
me.city = 'Toronto'

console.log(me)
console.log(me.city)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills[2]
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myArray = []
myArray.push(1)
console.log(myArray)
myArray.push(2)
console.log(myArray)
myArray.push(3)
console.log(myArray)
myArray.push(4)
console.log(myArray)
myArray.push(5)
console.log(myArray)
myArray.push(6)
console.log(myArray)
myArray.push(7)
console.log(myArray)
myArray.push(8)
console.log(myArray)
myArray.push(9)
console.log(myArray)
myArray.push(10)
console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myArray.pop()
console.log(myArray)
console.log(myArray[9]) //undefined. il valore dell'array di indice 9 non è definito dopo il 'pop'

myArray.push(100)
console.log(myArray)
console.log(myArray[9]) //dopo il 'push' l'elemento dell'array di indice 9 contiene il valore 100
